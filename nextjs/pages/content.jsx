import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Content() {
  return (
    <div className="pt-5">
      <Head>
        {/* characterset UTF-8 Watch this: https://youtu.be/MijmeoH9LT4 */}
        <meta charSet="UTF-8" />

        <title>MyWebClass.org | Privacy Policy</title>

        {/* Basic meta info */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="MyWebClass, software engineering skills, teaching, learning journey, advanced technologies, students, education, online learning, e-learning, web development, coding, programming, curriculum, courses, tutorials, instructors, education technology, virtual classroom, distance learning, student engagement"
        />
        <meta
          name="description"
          content="A project to provide educational resources to web development teachers"
        />
      </Head>

      <Header />
      <div className="container">
        <div className="row">
          {/* Table of Contents (TOC) menu with scrollspy */}
          <nav
            className="col-md-2 col-lg-2 d-md-block bg-light sidebar collapse position-fixed"
            id="toc_menu"
          >
            <div className="position-sticky pt-3">
              <h2 className="justify-left">Navigation</h2>
              {/* Javascript builds out the navigation items */}
            </div>
          </nav>
          <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
            <section id="title">
              <h1 className="fw-bold border-bottom">Article Title</h1>
              <div className="text-muted mb-3 ">
                By <a href="#">Author Name</a>
                <span className="text-muted me-3">
                  {" "}
                  Last Updated: January 1, 2022
                </span>{" "}
                <span className="text-muted" id="readingTime">
                  0
                </span>
              </div>
            </section>
            <section id="section2">
              <h2>Section 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                Donec efficitur, sapi</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                Donec efficitur, sapi</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                Donec efficitur, sapi</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                Donec efficitur, sapi</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                Donec efficitur, sapi</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus,
                magna at pulvinar tincidunt, massa lacus iaculis risus, nec
                efficitur risus ex ac lectus. Quisque id lacus non velit aliquet
                ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est.
                Donec efficitur, sapi</p>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Content;
