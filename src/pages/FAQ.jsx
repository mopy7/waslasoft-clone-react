import React from 'react'

import "./FAQ.css"


function FAQ() {
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
            <h2 className="hero-subtitle">FAQ's</h2>
            <p className="hero-description">
              Get answers to common questions about WaslaSoft products, features,
              and services.
            </p>
          </div>
        </div>
      </section>
      <section className="section faq" id="faq">
        <div className="container">
          <div className="faq-container">
            <h2 className="faq-heading">General Questions</h2>
            <div className="faq-item">
              <div className="faq-question">
                <h3>What is WaslaSoft?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  WaslaSoft is a cloud-enabled hybrid ERP and POS platform designed
                  to manage sales, inventory, CRM, accounting, and reporting
                  efficiently.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Who can benefit from WaslaSoft?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  Restaurants, retail stores, service businesses, and enterprises of
                  any size can benefit from WaslaSoft.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Do I need technical knowledge to use WaslaSoft?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  No. WaslaSoft is user-friendly and includes onboarding, training,
                  and ongoing support.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Can I use WaslaSoft offline?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  Yes. You can continue operations offline and data will sync
                  automatically once internet is restored.
                </p>
              </div>
            </div>
            {/* ================= FEATURES & FUNCTIONALITY ================= */}
            <h2 className="faq-heading">Features &amp; Functionality</h2>
            <div className="faq-item">
              <div className="faq-question">
                <h3>What features are included in the basic plan?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  POS, inventory management, customer management, sales reporting,
                  and email support.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Can I integrate WaslaSoft with other software?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  Yes. WaslaSoft integrates with QuickBooks, Stripe, PayPal,
                  Shopify, and other third-party systems.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Is my data secure with WaslaSoft?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  We use enterprise-grade encryption, secure servers, and automated
                  backups.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Can I access WaslaSoft on mobile devices?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  Yes. WaslaSoft works on all devices and also has native iOS &amp;
                  Android apps.
                </p>
              </div>
            </div>
            {/* ================= PRICING & PLANS ================= */}
            <h2 className="faq-heading">Pricing &amp; Plans</h2>
            <div className="faq-item">
              <div className="faq-question">
                <h3>How much does WaslaSoft cost?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  Plans start at $29/month and scale based on features and business
                  size.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Is there a free trial available?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>Yes. A 14-day free trial is available with full access.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Can I change my plan later?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  You can upgrade or downgrade your plan anytime with prorated
                  billing.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Are there any setup fees?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>No. There are no setup fees.</p>
              </div>
            </div>
            {/* ================= SUPPORT & TRAINING ================= */}
            <h2 className="faq-heading">Support &amp; Training</h2>
            <div className="faq-item">
              <div className="faq-question">
                <h3>What kind of support do you provide?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  Email, phone, live chat, documentation, and priority support
                  plans.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>How long does it take to implement WaslaSoft?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>Most businesses are live within a few days.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Do you provide training for my team?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  Yes. Training includes videos, documentation, webinars, and live
                  sessions.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>What happens if I need help after hours?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  Knowledge base is available 24/7, and priority plans receive
                  faster responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Still Need Help */}
      <section
        className="section"
        style={{
          background: "linear-gradient(135deg, #0072FF 0%, #0FA958 100%)",
          color: "white",
          padding: "80px 0"
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: 20, fontWeight: 600 }}>
              <i
                className="fas fa-question-circle"
                style={{ marginRight: 15, opacity: "0.8" }}
              />
              Still Have Questions?
            </h2>
            <p style={{ fontSize: "1.2rem", marginBottom: 40, opacity: "0.9" }}>
              Can't find the answer you're looking for? Our support team is here to
              help!
            </p>
            <div style={{ marginBottom: 40 }}>
              <a
                href="contact.html"
                className="btn"
                style={{
                  background: "white",
                  color: "#0072FF",
                  padding: "15px 30px",
                  borderRadius: 30,
                  textDecoration: "none",
                  fontWeight: 600,
                  margin: 10,
                  display: "inline-block",
                  transition: "all 0.3s ease"
                }}
              >
                <i className="fas fa-headset" style={{ marginRight: 8 }} />
                Contact Support
              </a>
              <a
                href="contact.html"
                className="btn"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid white",
                  padding: "13px 30px",
                  borderRadius: 30,
                  textDecoration: "none",
                  fontWeight: 600,
                  margin: 10,
                  display: "inline-block",
                  transition: "all 0.3s ease"
                }}
              >
                <i className="fas fa-calendar-alt" style={{ marginRight: 8 }} />
                Schedule Demo
              </a>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: 15,
                padding: 30,
                backdropFilter: "blur(10px)"
              }}
            >
              <p style={{ marginBottom: 20, fontSize: "1.1rem" }}>
                Or reach us directly:
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 40,
                  flexWrap: "wrap"
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <i
                    className="fas fa-envelope"
                    style={{ fontSize: "1.5rem", marginBottom: 10, opacity: "0.8" }}
                  />
                  <p style={{ margin: 0, fontWeight: 500 }}>
                    support@waslasoft.com
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <i
                    className="fas fa-phone"
                    style={{ fontSize: "1.5rem", marginBottom: 10, opacity: "0.8" }}
                  />
                  <p style={{ margin: 0, fontWeight: 500 }}>+1 (555) 123-4567</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <i
                    className="fas fa-clock"
                    style={{ fontSize: "1.5rem", marginBottom: 10, opacity: "0.8" }}
                  />
                  <p style={{ margin: 0, fontWeight: 500 }}>Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ