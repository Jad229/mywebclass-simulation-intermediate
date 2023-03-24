function Header() {
  return (
    <div>
      <header role="banner" class="fixed-top">
        <nav role="navigation" aria-label="Main navigation" class="top-bar">
          <div class="grid-container">
            <div class="grid-x grid-padding-x align-middle">
              <div class="cell shrink">
                <h5>
                  <a class="menu-text" href="/">
                    MyWebClass.org
                  </a>
                </h5>
              </div>
              <div class="cell auto">
                <div class="top-bar-right">
                  <ul class="menu">
                    <li>
                      <a href="content.html">Content Template</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="cell shrink">
                <button
                  class="menu-icon"
                  type="button"
                  data-toggle="top-bar"
                  aria-expanded="false"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
