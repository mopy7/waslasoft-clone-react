import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>WaslaSoft</h3>
              <p>
                Cloud-enabled hybrid ERP &amp; POS solutions for modern businesses.
                Streamline your operations with our comprehensive platform.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://twitter.com" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Products</h4>
              <ul>
                <li>
                  <a href="products.html">Point of Sale</a>
                </li>
                <li>
                  <a href="products.html">ERP System</a>
                </li>
                <li>
                  <a href="products.html">Mobile Apps</a>
                </li>
                <li>
                  <a href="products.html">Integrations</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="company.html">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="contact.html">Support</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="products.html">Documentation</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a href="contact.html">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 WaslaSoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer