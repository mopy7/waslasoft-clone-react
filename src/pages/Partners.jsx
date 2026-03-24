import React, { useEffect } from 'react'

import "./Partners.css"


function Partners() {
  useEffect(() => {
    document.body.classList.add("partners-page")

    return () => {
      document.body.classList.remove("partners-page")
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-subpage"
        style={{
          background: "linear-gradient(to bottom, #0073ff 0%, #0caa64 100%)",
          backgroundColor: "#0073ff",
          color: "white",
          padding: "60px 0",
          minHeight: "30vh",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 1
        }}
      >
        <div className="container">
          <div className="hero-subpage-content">
            <h2 className="hero-subtitle">Partner with WaslaSoft</h2>
            <p className="hero-description">
              Join our growing network of partners and help businesses transform
              their operations with intelligent, cloud-enabled ERP and POS
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Introduction */}
      <section className="section">
        <div className="container">
          <div className="partner-intro">
            <h2 className="section-title">Become a WaslaSoft Partner</h2>
            <p
              className="section-subtitle"
              style={{
                maxWidth: 1100,
                margin: "0 auto 30px",
                fontSize: "1.2rem",
                lineHeight: "1.7"
              }}
            >
              Empower businesses to build stronger, lasting relationships through
              intelligent, cloud-enabled ERP and POS solutions. Our products help
              your customers streamline operations, enhance communication, and make
              smarter data-driven decisions.
            </p>
            <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
              <p
                style={{
                  fontSize: "1.15rem",
                  color: "#666",
                  lineHeight: "1.8",
                  marginBottom: 30
                }}
              >
                As a WaslaSoft Partner, you'll gain access to new opportunities,
                valuable resources, and dedicated support to help you grow your
                business and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="section" style={{ background: "#f8f9ff" }}>
        <div className="container">
          <h2 className="section-title">Explore Our Partner Programs</h2>
          <p className="section-subtitle">
            We offer a flexible and rewarding partner framework designed for every
            level of collaboration — from referral to full solution implementation.
            Choose the program that fits your goals and investment level:
          </p>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h3
              style={{
                fontSize: "1.8rem",
                color: "#333",
                marginBottom: 15,
                fontWeight: 600
              }}
            >
              Refer. Resell. Implement.
            </h3>
            <p style={{ fontSize: "1.1rem", color: "#666" }}>
              Partner with WaslaSoft and grow with us.
            </p>
          </div>
          <div className="partner-cards">
            <div className="partner-card">
              <h3>
                <i
                  className="fas fa-handshake"
                  style={{ color: "#0072FF", marginRight: 10 }}
                />
                Referral Partner
              </h3>
              <p>
                Perfect for consultants, advisors, and professionals who want to
                recommend WaslaSoft solutions to their clients and earn referral
                commissions.
              </p>
              <ul style={{ color: "#666", lineHeight: "1.8", margin: "20px 0" }}>
                <li>Easy online application process</li>
                <li>Up to 25% referral commission</li>
                <li>Access to partner portal</li>
                <li>Marketing materials and support</li>
              </ul>
              <a href="#" className="btn-primary">
                Apply Now
              </a>
            </div>
            <div className="partner-card">
              <h3>
                <i
                  className="fas fa-chart-line"
                  style={{ color: "#0FA958", marginRight: 10 }}
                />
                Sales Partner
              </h3>
              <p>
                For resellers and sales organizations ready to actively promote and
                sell WaslaSoft products to their customer base.
              </p>
              <ul style={{ color: "#666", lineHeight: "1.8", margin: "20px 0" }}>
                <li>Higher commission rates up to 35%</li>
                <li>Sales training and certification</li>
                <li>Dedicated partner manager</li>
                <li>Co-marketing opportunities</li>
              </ul>
              <a href="#" className="btn-primary">
                Apply Now
              </a>
            </div>
            <div className="partner-card">
              <h3>
                <i
                  className="fas fa-cogs"
                  style={{ color: "#ffdc00", marginRight: 10 }}
                />
                Solution Partner
              </h3>
              <p>
                Ideal for system integrators and consultants who implement complete
                WaslaSoft solutions for end customers.
              </p>
              <ul style={{ color: "#666", lineHeight: "1.8", margin: "20px 0" }}>
                <li>Highest revenue share up to 50%</li>
                <li>Technical training and certification</li>
                <li>Lead distribution program</li>
                <li>Implementation support</li>
              </ul>
              <a href="#" className="btn-primary">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Comparison Table */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Partner Program Comparison</h2>
          <p className="section-subtitle">
            Compare our partner programs side-by-side to find the perfect fit for
            your business goals.
          </p>
          <div className="partner-table">
            <table>
              <thead>
                <tr>
                  <th />
                  <th>Referral</th>
                  <th>Sales Partner</th>
                  <th>Solution Partner</th>
                </tr>
              </thead>
              <tbody>
                {/* BENEFITS SECTION */}
                <tr className="section-label">
                  <td colSpan={4}>BENEFITS</td>
                </tr>
                <tr>
                  <td>Partner's Revenue up to 25 to 50%</td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Referral fee</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>WaslaSoft Partner Connect</td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Use WaslaSoft marks, logos, and URLs</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Sales training</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Product training</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Partner manager</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Incentives</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Lead distribution</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                {/* REQUIREMENTS SECTION */}
                <tr className="section-label">
                  <td colSpan={4}>REQUIREMENTS</td>
                </tr>
                <tr>
                  <td>Apply online/Direct</td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Sign agreement</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Actively promote WaslaSoft Products</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Joint business planning</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Manage end customer billing</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Provide level 1 customer support</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Service and support enablement</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Partner sales training</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Partner product training</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Named partner manager</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
                <tr>
                  <td>Advance Software Purchase</td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="not-available">—</span>
                  </td>
                  <td className="text-center">
                    <span className="checkmark">✔</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Partner with WaslaSoft?</h2>
          <p>
            Join hundreds of partners who are growing their business with WaslaSoft
          </p>
          <div style={{ marginTop: 30 }}>
            <a href="#" className="btn-primary">
              Apply to Become a Partner
            </a>
            <a href="contact.html" className="btn-outline">
              Contact Partner Team
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Partners
