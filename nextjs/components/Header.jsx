import Link from "next/link";
function Header() {
  return (
    <div>
      <header role="banner" class="fixed-top">
        <nav
          role="navigation"
          aria-label="Main navigation"
          class="navbar navbar-expand-lg navbar-dark bg-dark"
        >
          <div class="container">
            <Link class="navbar-brand" href="/">
              MyWebClass.org
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Toggle navigation</span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" href="/content">
                    Content Template
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
