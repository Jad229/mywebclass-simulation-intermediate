function Footer() {
  return (
    <footer class="py-5 container">
      <div class="row">
        <div class="col">
          <h5>About Us</h5>
          <ul class="nav flex-column">
            <li class="nav-item">
              <li class="nav-item mb-2">
                <a href="story.html" class="nav-link p-0 text-muted">
                  Our Story
                </a>
              </li>

              <a
                class="nav-link mb-2 p-0 text-muted active"
                aria-current="page"
                href="privacy.html"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div class="col-sm-3 ">
          <h5>Share on Social Media</h5>
          <ul class="nav">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                <i class="bi bi-linkedin me-2"></i>
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                <i class="bi bi-twitter me-2"></i>
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                <i class="bi bi-facebook me-2"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                class="form-control"
                placeholder="Email address"
              />
              <button class="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
