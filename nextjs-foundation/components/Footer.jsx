function Footer() {
  return (
    <div>
      <footer class="py-5">
        <div class="grid-container">
          <div class="grid-x grid-margin-x">
            <div class="cell small-3">
              <h5>About Us</h5>
              <ul class="vertical menu">
                <li class="menu-item">
                  <a href="story.html" class="menu-link">
                    Our Story
                  </a>
                </li>
                <li class="menu-item">
                  <a href="privacy.html" class="menu-link is-active">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div class="cell small-3">
              <h5>Share on Social Media</h5>
              <ul class="menu">
                <li class="menu-item">
                  <a href="#" class="menu-link">
                    <i class="bi bi-linkedin me-2"></i>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="#" class="menu-link">
                    <i class="bi bi-twitter me-2"></i>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="#" class="menu-link">
                    <i class="bi bi-facebook me-2"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="cell medium-5 medium-offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="input-group">
                  <label for="newsletter1" class="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    class="input-group-field"
                    placeholder="Email address"
                  />
                  <div class="input-group-button">
                    <button class="button" type="button">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
