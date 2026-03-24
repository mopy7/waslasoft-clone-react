import React from 'react'

function Features() {
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
            <h2 className="hero-subtitle">Powerful Features</h2>
            <p className="hero-description">
              Explore our comprehensive suite of features designed to streamline
              your business operations and drive growth.
            </p>
          </div>
        </div>
      </section>
      {/* Features Overview */}
      <section className="section white">
        <div className="container">
          <h2 className="section-title">Comprehensive Feature Suite</h2>
          <p className="section-subtitle">
            Discover the powerful features that make our platform the perfect choice
            for your business needs.
          </p>
          <div className="features-grid">
            {/* Cloud-Based System */}
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-cloud" />
              </div>
              <div className="feature-content">
                <h3>Cloud-Based System</h3>
                <p>
                  Access your business data anywhere, anytime with our secure cloud
                  infrastructure. No installation required, automatic updates, and
                  99.9% uptime guarantee.
                </p>
                <ul>
                  <li>Real-time data synchronization</li>
                  <li>Automatic backups and updates</li>
                  <li>Multi-device accessibility</li>
                  <li>Enterprise-grade security</li>
                </ul>
              </div>
            </div>
            {/* Integrated POS */}
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-cash-register" />
              </div>
              <div className="feature-content">
                <h3>Integrated POS System</h3>
                <p>
                  Complete point-of-sale solution with inventory management,
                  customer tracking, and comprehensive reporting capabilities.
                </p>
                <ul>
                  <li>Multi-location support</li>
                  <li>Inventory tracking</li>
                  <li>Customer management</li>
                  <li>Sales analytics</li>
                </ul>
              </div>
            </div>
            {/* ERP Integration */}
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-sitemap" />
              </div>
              <div className="feature-content">
                <h3>ERP Integration</h3>
                <p>
                  Enterprise resource planning capabilities that streamline your
                  business processes and improve operational efficiency.
                </p>
                <ul>
                  <li>Financial management</li>
                  <li>Supply chain optimization</li>
                  <li>Human resources</li>
                  <li>Project management</li>
                </ul>
              </div>
            </div>
            {/* Analytics & Reporting */}
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line" />
              </div>
              <div className="feature-content">
                <h3>Analytics &amp; Reporting</h3>
                <p>
                  Powerful analytics and reporting tools that provide insights into
                  your business performance and help you make data-driven decisions.
                </p>
                <ul>
                  <li>Real-time dashboards</li>
                  <li>Custom reports</li>
                  <li>Trend analysis</li>
                  <li>Performance metrics</li>
                </ul>
              </div>
            </div>
            {/* Mobile Access */}
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt" />
              </div>
              <div className="feature-content">
                <h3>Mobile Access</h3>
                <p>
                  Full mobile compatibility with responsive design and dedicated
                  mobile apps for iOS and Android devices.
                </p>
                <ul>
                  <li>Responsive design</li>
                  <li>Mobile apps</li>
                  <li>Offline capability</li>
                  <li>Touch-friendly interface</li>
                </ul>
              </div>
            </div>
            {/* Security & Compliance */}
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt" />
              </div>
              <div className="feature-content">
                <h3>Security &amp; Compliance</h3>
                <p>
                  Enterprise-grade security with end-to-end encryption, regular
                  audits, and compliance with industry standards and regulations.
                </p>
                <ul>
                  <li>End-to-end encryption</li>
                  <li>Regular security audits</li>
                  <li>GDPR compliance</li>
                  <li>Role-based access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Experience These Features?</h2>
            <p className="cta-description">
              Start your free trial today and discover how WaslaSoft can transform
              your business operations.
            </p>
            <div className="cta-buttons">
              <a href="#" className="cta-btn">
                Start Free Trial
              </a>
              <a href="contact.html" className="cta-btn outline">
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features