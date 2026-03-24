import React from 'react'

function Company() {
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
            <h2 className="hero-subtitle">About WaslaSoft</h2>
            <p className="hero-description">
              Leading the future of business management with innovative
              cloud-enabled hybrid ERP &amp; POS solutions
            </p>
          </div>
        </div>
      </section>
      {/* Company Overview */}
      <section className="section our-story">
        <div className="container">
          <div className="our-story-grid">
            <div className="our-story-content">
              <h2 className="our-story-title">Our Story</h2>
              <p>
                Founded in 2020, WaslaSoft emerged from a simple vision: to make
                enterprise-level business management accessible to companies of all
                sizes. We believe that powerful technology should be intuitive,
                affordable, and scalable.
              </p>
              <p>
                Our name combines "Wasla" (Arabic for connection) and "Soft"
                (software), reflecting our mission to connect all aspects of your
                business through seamless software solutions.
              </p>
              <div className="our-story-stats">
                <div>
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div>
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Team Members</div>
                </div>
                <div>
                  <div className="stat-number">4</div>
                  <div className="stat-label">Years of Service</div>
                </div>
              </div>
            </div>
            <div className="our-story-image">
              <img
                src="https://sspark.genspark.ai/cfimages?u1=BBvHdSOpR4mAkU64J2eC1mH1VZZvyqiFa1tSsFson3QDeZ%2BOybMdoQKragA%2FZHfTyLr4%2FYkIpfQBAwDJqSo%2F5M0%2FCrO9%2FKX6NtQ1TM5O%2BTfVug%3D%3D&u2=9B5WexOqoQsxqprD&width=2560"
                alt="WaslaSoft Team"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-card">
              <div className="mv-header">
                <i className="fas fa-bullseye" />
                <h3>Our Mission</h3>
              </div>
              <p>
                To empower businesses worldwide with intelligent, connected, and
                user-friendly management solutions that drive growth, efficiency,
                and success in the digital age.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-header">
                <i className="fas fa-eye" />
                <h3>Our Vision</h3>
              </div>
              <p>
                To become the global leader in business management solutions,
                creating a world where every business, regardless of size, can
                thrive through technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <div className="values-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-users" />
              <h4>Customer First</h4>
              <p>
                Our customers' success is our success. We listen, understand, and
                deliver solutions that exceed expectations.
              </p>
            </div>
            <div className="value-card">
              <i className="fas fa-lightbulb" />
              <h4>Innovation</h4>
              <p>
                We constantly push boundaries to create innovative solutions that
                solve real business challenges.
              </p>
            </div>
            <div className="value-card">
              <i className="fas fa-handshake" />
              <h4>Integrity</h4>
              <p>
                We conduct business with honesty, transparency, and ethical
                practices in all our relationships.
              </p>
            </div>
            <div className="value-card">
              <i className="fas fa-chart-line" />
              <h4>Excellence</h4>
              <p>
                We strive for excellence in everything we do, from product
                development to customer support.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section
        className="cta-section"
        style={{
          background: "linear-gradient(135deg, #0072FF 0%, #0FA958 100%)",
          color: "white",
          padding: "80px 0",
          textAlign: "center"
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", marginBottom: 20, fontWeight: 600 }}>
            Ready to Transform Your Business?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: 600,
              margin: "0 auto 40px",
              opacity: "0.9"
            }}
          >
            Join thousands of businesses already using WaslaSoft to streamline their
            operations
          </p>
          <a
            href="contact.html"
            className="btn"
            style={{
              background: "white",
              color: "#0072FF",
              padding: "15px 40px",
              borderRadius: 30,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1.1rem"
            }}
          >
            Get Started Today
          </a>
        </div>
      </section>
    </>
  )
}

export default Company