import React from 'react'

import "./Contact.css"


function Contact() {
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
            <h2 className="hero-subtitle">We're Here to Help</h2>
            <p className="hero-description">
              Get in touch with our team for questions, support, or to learn more
              about how WaslaSoft can transform your business.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="section contact-section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: 40,
              alignItems: "start"
            }}
          >
            {/* Contact Form */}
            <div className="contact-form">
              <h3 style={{ fontSize: "1.8rem", marginBottom: 25, color: "#333" }}>
                Send Us a Message
              </h3>
              <form id="contactForm">
                <div
                  className="grid"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: 20 }}
                >
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required="" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required="" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="inquiryType">Inquiry Type *</label>
                  <select id="inquiryType" name="inquiryType" required="">
                    <option value="">Select an option</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Question</option>
                    <option value="support">Technical Support</option>
                    <option value="demo">Request Demo</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    required=""
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: 15, fontSize: "1.1rem" }}
                >
                  <i className="fas fa-paper-plane" style={{ marginRight: 8 }} />
                  Send Message
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="contact-info-card">
              <h3 style={{ fontSize: "1.5rem", marginBottom: 25, color: "#333" }}>
                Get in Touch
              </h3>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="contact-details">
                  <h4>Office Address</h4>
                  <p>
                    123 Business Avenue
                    <br />
                    Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone" />
                </div>
                <div className="contact-details">
                  <h4>Phone Numbers</h4>
                  <p>
                    Sales: +1 (555) 123-4567
                    <br />
                    Support: +1 (555) 987-6543
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="contact-details">
                  <h4>Email Addresses</h4>
                  <p>
                    General: info@waslasoft.com
                    <br />
                    Sales: sales@waslasoft.com
                    <br />
                    Support: support@waslasoft.com
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock" />
                </div>
                <div className="contact-details">
                  <h4>Business Hours</h4>
                  <p>
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <div
                style={{
                  borderTop: "2px solid #e9ecef",
                  paddingTop: 25,
                  marginTop: 25
                }}
              >
                <h4 style={{ color: "#333", marginBottom: 15 }}>Follow Us</h4>
                <div style={{ display: "flex", gap: 10 }}>
                  <a
                    href="#"
                    style={{
                      background: "#007BFF",
                      color: "white",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none"
                    }}
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    style={{
                      background: "#1DA1F2",
                      color: "white",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none"
                    }}
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    style={{
                      background: "#0077B5",
                      color: "white",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none"
                    }}
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="#"
                    style={{
                      background: "#E4405F",
                      color: "white",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none"
                    }}
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Map Section */}
          <div className="map-container">
            <div style={{ textAlign: "center" }}>
              <i
                className="fas fa-map-marked-alt"
                style={{ fontSize: 60, color: "#007BFF", marginBottom: 15 }}
              />
              <h4 style={{ color: "#333", marginBottom: 10 }}>Interactive Map</h4>
              <p style={{ color: "#666" }}>
                Map integration would go here in a real implementation
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section
        className="section"
        style={{
          background: "linear-gradient(to bottom, #0073ff 0%, #0caa64 100%)",
          color: "white"
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: 20 }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: 30 }}>
            Get started with a free trial or schedule a personalized demo with our
            team.
          </p>
          <div>
            <button
              className="btn"
              style={{ background: "white", color: "#007BFF", margin: 10 }}
            >
              Start Free Trial
            </button>
            <button
              className="btn"
              style={{
                background: "transparent",
                border: "2px solid white",
                color: "white",
                margin: 10
              }}
            >
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact