class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav>
      <div class="navbar">
        <div class="logo">
          <a href="#">
            <img src="/assets/Globust-Logistics.png" alt="logo-img" width="200"/>
          </a>
        </div>
        <div class="nav-links">
          <ul class="links">
            <li><a href="/index.html">HOME</a></li>
            <li><a href="/about.html">COMPANY</a></li>
            <li>
              <a href="#">SERVICES</a>
              <i class='bx bxs-chevron-down htmlcss-arrow arrow'></i>
              <ul class="htmlCss-sub-menu sub-menu">
                <li><a href="#">Specialised Logistics</a></li>
                <li><a href="#">Integrated Freight Logistics</a></li>
                <li><a href="#">Infra Technology Services</a></li>
                <li class="more">
                  <span>
                    <a href="#">More</a>
                    <i class='bx bxs-chevron-right arrow more-arrow'></i>
                  </span>
                  <ul class="more-sub-menu sub-menu">
                    <li><a href="#">Distribution / Packaging</a></li>
                    <li><a href="#">Supply Chain Designing</a></li>
                    <li><a href="#">Warehousing</a></li>
                    <li><a href="#">Cold Chain</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">MEDIA</a>
              <i class='bx bxs-chevron-down js-arrow arrow '></i>
              <ul class="js-sub-menu sub-menu">
                <li><a href="#">Insights</a></li>
                <li><a href="/blog.html">Blogs</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Gallery</a></li>
              </ul>
            </li>
            <li><a href="/contact.html">CONTACT US</a></li>
          </ul>
          <div class="login-btn">
            <a href="#">LOGIN</a>
          </div>
        </div>
        <i class='bx bx-menu'></i>
        <i class='bx bx-x'></i>
      </div>
    </nav>
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <div class="footer-top section">
          <div class="footer-brand">
            <a href="#" class="logo">
              <img src="/assets/Globust-Logistics.png" alt="" width="200" />
            </a>

            <p class="footer-text">
              Globust Logistics exists to enable businesses facilitating their
              global logistics solutions for a delightfully profitable and
              sustainable future on a consistent and long-term basis.
            </p>

            <ul class="social-list">
              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </div>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Quick Links</p>
            </li>
            <li>
              <a href="/about.html" class="footer-link">Company</a>
            </li>
            <li>
              <a href="#" class="footer-link">Services</a>
            </li>
            <li>
              <a href="/blog.html" class="footer-link">Blog</a>
            </li>
            <li>
              <a href="#" class="footer-link">FAQ</a>
            </li>
            <li>
              <a href="/contact.html" class="footer-link">Contact Us</a>
            </li>
          </ul>
          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Services</p>
            </li>
            <li>
              <a href="#" class="footer-link">Warehouse</a>
            </li>
            <li>
              <a href="#" class="footer-link">Air Freight</a>
            </li>
            <li>
              <a href="#" class="footer-link">Ocean Freight</a>
            </li>
            <li>
              <a href="#" class="footer-link">Road Freight</a>
            </li>
            <li>
              <a href="#" class="footer-link">Packaging</a>
            </li>
          </ul>
          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Community</p>
            </li>
            <li>
              <a href="#" class="footer-link">Business Consulting</a>
            </li>
            <li>
              <a href="#" class="footer-link">Testimonials</a>
            </li>
            <li>
              <a href="#" class="footer-link">Track Your Shipment</a>
            </li>
            <li>
              <a href="#" class="footer-link">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="footer-link">Terms & Condition</a>
            </li>
          </ul>
        </div>

        <div class="footer-bottom">
          <p class="copyright">
            &copy; 2023 Globust Logistics | <br />
            All Rights Reserved by
            <a href="#" class="copyright-link">Globust Logistics</a>
          </p>
        </div>
      </div>
    `;
  }
}

class NewsLetter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="container">
      <figure class="newsletter-banner img-holder">
        <img
          src="/assets/newsletter-banner.png"
          width="303"
          height="381"
          alt="newsletter banner"
          class="w-100"
        />
      </figure>

      <div class="newsletter-content">
        <h2 class="h2 section-title">Subscribe for offers and news</h2>
        <form action="" class="newsletter-form">
          <input
            type="email"
            name="email_address"
            placeholder="Enter Your Email"
            aria-label="email"
            class="email-field"
          />
          <button type="submit" class="newsletter-btn">
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
    `;
  }
}

class BackToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a
      href="#top"
      class="back-top-btn"
      aria-label="Back to top"
      data-back-top-btn
    >
      <ion-icon name="chevron-up"></ion-icon>
    </a>
    `;
  }
}

customElements.define("app-header", Header);
customElements.define("app-footer", Footer);
customElements.define("news-letter", NewsLetter);
customElements.define("back-to-top", BackToTop);
