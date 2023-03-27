// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('SEO testing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('should have meta title and description', async ({ page }) => {
    const title = await page.title();
    const description = await page.$eval('meta[name="description"]', (el) => el.getAttribute('content'));
    
    expect(title).toBeDefined();
    expect(description).toBeDefined();
  });

  test('should have H1 tag', async ({ page }) => {
    const h1 = await page.$('h1');
    expect(h1).toBeDefined();
  });

  test('should have alt attribute in all images', async ({ page }) => {
    const images = await page.$$('img');
    
    for (let i = 0; i < images.length; i++) {
      const alt = await images[i].getAttribute('alt');
      expect(alt).toBeDefined();
    }
  });
});

test('should have the correct meta keywords', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const expectedKeywords = 'MyWebClass, software engineering skills, teaching, learning journey, advanced technologies, students, education, online learning, e-learning, web development, coding, programming, curriculum, courses, tutorials, instructors, education technology, virtual classroom, distance learning, student engagement';
  const metaKeywords = await page.$eval('meta[name="keywords"]', el => el.getAttribute('content'));

  expect(metaKeywords).toEqual(expectedKeywords);
});
