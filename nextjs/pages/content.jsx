// index.html
import Footer from '../components/Footer'
import Header from '../components/Header'
import Translation from '../components/Translation'

function Content () {
  return (
    <Translation>
      <div class='pt-5'>
        <head>
          {/* <!--characterset UTF-8 Watch this: https://youtu.be/MijmeoH9LT4 --> */}

          <title>MyWebClass.org | Privacy Policy</title>
          <meta charset='UTF-8' />

          <meta content='width=device-width, initial-scale=1' name='viewport' />

          {/* <!--Basic meta info --> */}
          <meta content='My Webclass Homepage | Privacy Policy' name='keywords' />
          <meta content='Keith Williams' name='author' />
          <meta
            content='A project to provide educational resources to web development teachers'
            name='description'
          />

          {/* <!--OpenGraph meta --> */}
          <meta content='' property='og:title' />
          <meta content='' property='og:description' />
          <meta content='assets/images/logo.png' property='og:image' />
          <meta content='' property='og:url' />
        </head>

        <Header />
        <div class='container'>
          <div class='row'>
            {/* <!-- Table of Contents (TOC) menu with scrollspy --> */}
            <nav
              class='col-md-2 col-lg-2 d-md-block bg-light sidebar collapse position-fixed'
              id='toc_menu'
            >
              <div class='position-sticky pt-3'>
                <h2 class='justify-left'>Navigation</h2>
                {/* <!-- Javascript builds out the navigation items --> */}
              </div>
            </nav>
            <main class='col-md-9 ms-sm-auto col-lg-9 px-md-4'>
              <section id='title'>
                <h1 class='fw-bold border-bottom'>Article Title</h1>
                <div class='text-muted mb-3 '>
                  By <a href='#'>Author Name</a>
                  <span class='text-muted me-3'>
                    {' '}
                    Last Updated: January 1, 2022
                  </span>{' '}
                  <span class='text-muted' id='readingTime'>
                    0
                  </span>
                </div>
              </section>
              <section id='section2'>
                <h2>Section 2</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
              </section>
              <section id='section3'>
                <h2>Section 3</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
              </section>
              <section id='section4'>
                <h2>Section 4</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                  magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                  efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                  ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                  Donec efficitur, sapi
                </p>
              </section>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </Translation>
  )
}

export default Content
