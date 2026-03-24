import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <div className="nav-logo">
            <img
              src="images/company-logo.png"
              alt="WaslaSoft Logo"
              style={{ height: 60, width: "auto" }}
            />
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to={""} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products" } className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/features"} className="nav-link">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/company"} className="nav-link">
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/partners"} className="nav-link">
                Partners
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/faq"} className="nav-link">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/blog"} className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-login">
            <button className="btn btn-login" aria-label="Login">
              Login
            </button>
          </div>
          <div className="hamburger" aria-label="Toggle navigation">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header