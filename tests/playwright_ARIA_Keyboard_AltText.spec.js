/* eslint-env jest */
/* eslint-disable no-undef */

const { chromium } = require('playwright')
const lighthouse = require('lighthouse')

describe('Accessibility and Performance Test', () => {
    let browser
    let page

    beforeAll(async () => {
        browser = await chromium.launch({ headless: false })
    })

    beforeEach(async () => {
        page = await browser.newPage()
        await page.goto('http://localhost:3000')
    })

    afterEach(async () => {
        await page.close()
    })

    afterAll(async () => {
        await browser.close()
    })

    it('should be compliant with WAI-ARIA specifications', async () => {
        const results = await page.accessibility.snapshot()
        expect(results).toHaveProperty('role', 'document')
        expect(results.children).toHaveLength(1)
        expect(results.children[0]).toHaveProperty('role', 'banner')
    })

    it('should pass the W3C validator', async () => {
        const response = await page.goto('https://validator.w3.org/check?uri=http://localhost:3000')
        const status = response.status()
        expect(status).toBe(200)
        const validationErrors = await page.$$eval('.error', (elements) => elements.length)
        expect(validationErrors).toBe(0)
    })

    it('should implement alternative text for images', async () => {
        const images = await page.$$('img')
        for (const image of images) {
            const alt = await image.getAttribute('alt')
            expect(alt).not.toBe(null)
        }
    })

    it('should support keyboard navigation', async () => {
        const input = await page.$('input[type="text"]')
        await input.focus()
        await page.keyboard.type('Hello, world!')
        const value = await input.getAttribute('value')
        expect(value).toBe('Hello, world!')
        await page.keyboard.press('Enter')
        const message = await page.$eval('#message', (element) => element.textContent)
        expect(message).toBe('You entered: Hello, world!')
    })

    it('should include ARIA attributes', async () => {
        const button = await page.$('button')
        const ariaLabel = await button.getAttribute('aria-label')
        expect(ariaLabel).toBe('Submit')
        const ariaDisabled = await button.getAttribute('aria-disabled')
        expect(ariaDisabled).toBe('false')
    })

    it('should be compliant with WCAG standards', async () => {
        const results = await page.accessibility.check({
            standards: ['WCAG2AA']
        })
        const violations = results.violations
        expect(violations).toHaveLength(0)
    })

    it('should have good performance and best practices with Lighthouse', async () => {
        const lighthouseOptions = {
            output: 'json',
            onlyCategories: ['performance', 'best-practices']
        }

        const url = await page.evaluate(() => window.location.href)
        const result = await lighthouse(url, lighthouseOptions)

        const { categories } = result.lhr
        expect(categories.performance.score).toBeGreaterThanOrEqual(0.8)
        expect(categories['best-practices'].score).toBeGreaterThanOrEqual(0.8)
    })
})
