import Link from "next/link";

function Header() {
  return (
    <header role="banner" className="fixed-top">
      <nav role="navigation" aria-label="Main navigation" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/" className="navbar-brand" title="Go to homepage">
            MyWebClass.org
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Toggle navigation</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/content" className="nav-link" title="Go to content template">
                  Content Template
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

// Add keyboard navigation for the navbar toggler button
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
navbarToggler.addEventListener('keydown', (event) => {
  if (event.code === 'Enter' || event.code === 'Space') {
    event.preventDefault();
    navbarCollapse.classList.toggle('show');
    navbarToggler.setAttribute('aria-expanded', navbarCollapse.classList.contains('show'));
  }
});

// Add ARIA attributes to the navbar elements
navbarCollapse.setAttribute('role', 'menu');
navbarCollapse.setAttribute('aria-labelledby', 'navbarToggler');

const navbarLinks = document.querySelectorAll('.navbar-nav a');
navbarLinks.forEach((link) => {
  link.setAttribute('role', 'menuitem');
});
