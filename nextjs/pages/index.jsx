// index.html
import Footer from '../components/Footer'
import Header from '../components/Header'
import Translation from '../components/Translation'

function HomePage () {
  return (
    <div class='pt-5'>
      <head>
        {/* <!--characterset UTF-8 Watch this: https://youtu.be/MijmeoH9LT4 --> */}

        <title>MyWebClass.org</title>
        <meta charset='UTF-8' />

        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/* <!--Basic meta info --> */}
        <meta name='keywords' content='My Webclass Homepage' />
        <meta name='author' content='Keith Williams' />
        <meta
          name='description'
          content='A project to help educators integrate new technologies into their teaching'
        />

        {/* <!--OpenGraph meta --> */}
        <meta property='og:title' content='' />
        <meta property='og:description' content='' />
        <meta property='og:image' content='assets/images/logo.png' />
        <meta property='og:url' content='' />
      </head>

      <Header />
      <main>
        <Translation>
          <div class='container my-5'>
            <div class='row p-4 pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg '>
              <div class='col-lg-7 p-3 p-lg-3 pt-lg-1'>
                <h1 class='display-6 fw-bold lh-1'>
                  Revolutionize your teaching
                </h1>
                <p class='lead'>
                  Empower your students with cutting-edge software engineering
                  skills. Join MyWebClass and discover advanced technologies that
                  will transform your teaching and their learning journey.
                </p>
                <div class='d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3'>
                  <button type='button' class='btn btn-success btn-lg px-4 me-md-2 fw-bold'>Start Here</button>
                </div>
              </div>
              <div class='col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg'>
                <img class='rounded-lg-3 img-fluid' src='/images/teacher.gif' alt='a teacher with students' width='720' />
              </div>
            </div>
          </div>
        </Translation>
      </main>
      <Footer />
    </div>
  )
};

export default HomePage
