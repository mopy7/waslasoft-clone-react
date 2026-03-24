import React from 'react'

import "./Home.css"


function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" role="banner" aria-label="WaslaSoft hero section">
        <div className="hero-container">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-headlines">
                <h1 className="hero-line hero-line-1">CLOUD-ENABLED</h1>
                <h1 className="hero-line hero-line-2">HYBRID ERP &amp; POS</h1>
                <h2 className="hero-line hero-line-3">FOR YOUR BUSINESS</h2>
              </div>
              <p
                className="hero-description"
                style={{ fontSize: "0.95rem", lineHeight: "1.5" }}
              >
                Manage sales, inventory, accounting, HR &amp; more — online or
                offline. Streamline your business operations with our comprehensive
                enterprise solution.
              </p>
              <div className="hero-buttons">
                <button
                  className="btn btn-primary"
                  aria-label="Start 14-day free trial"
                >
                  Start 14-Day Free Trial
                </button>
                <button className="btn btn-secondary" aria-label="Request a demo">
                  Request a Demo
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">400+</div>
                  <div className="stat-label">HAPPY CUSTOMERS</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4.7/5</div>
                  <div className="stat-label">AVERAGE RATING</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000</div>
                  <div className="stat-label">ACTIVE USERS</div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="images/custom-hero-image-invoice.png"
                alt="Business Technology Illustration"
                style={{ maxWidth: "100%", height: "auto", borderRadius: 10 }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Intro Section */}
      <section
        className="section intro"
        style={{ background: "#f8f9fa", padding: "60px 0" }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#333",
              marginBottom: 20,
              fontWeight: 700
            }}
          >
            Transform Your Business Operations
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              margin: "0 auto 30px auto",
              lineHeight: "1.8",
              maxWidth: 1000
            }}
          >
            WaslaSoft provides a comprehensive cloud-enabled hybrid ERP and POS
            solution that empowers businesses to manage sales, inventory,
            accounting, HR, and more - both online and offline. Join thousands of
            satisfied customers who have streamlined their operations and boosted
            productivity with our cutting-edge platform.
          </p>
          <a href="products.html">
            <button
              className="btn btn-primary"
              style={{
                background: "#097f52",
                color: "white",
                border: "none",
                padding: "12px 30px",
                borderRadius: 25,
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onmouseover="this.style.background='#0056b3'"
              onmouseout="this.style.background='#097f52'"
            >
              View More
            </button>
          </a>
        </div>
      </section>
      {/* Solution Section */}
      <section className="section solutions">
        <div className="container">
          <h2 className="section-title">Products</h2>
          <p
            style={{
              textAlign: "center",
              marginBottom: 40,
              fontSize: "1.125rem",
              color: "#666666",
              lineHeight: "1.6"
            }}
          >
            Discover our range of enterprise solutions designed to streamline your
            business operations and drive growth.
          </p>
          <div className="solutions-carousel-container">
            <button
              className="carousel-btn carousel-btn-prev"
              aria-label="Previous solutions"
            >
              <i className="fas fa-chevron-left" />
            </button>
            <div className="solutions-carousel">
              <div className="solutions-grid carousel-track">
                {/* Restaurant POS */}
                <div className="solution-card">
                  <div className="solution-icon">
                    <i className="fas fa-utensils" />
                  </div>
                  <h3>Restaurant POS</h3>
                  <p>
                    Complete restaurant management solution with table management,
                    kitchen display, and reporting.
                  </p>
                  <ul>
                    <li>Table management</li>
                    <li>Kitchen display system</li>
                    <li>Menu management</li>
                    <li>Staff scheduling</li>
                  </ul>
                  <a href="products.html" className="btn btn-outline">
                    View More
                  </a>
                </div>
                {/* Retail POS */}
                <div className="solution-card">
                  <div className="solution-icon">
                    <i className="fas fa-shopping-cart" />
                  </div>
                  <h3>Retail POS</h3>
                  <p>
                    Advanced retail POS with inventory management, loyalty, and
                    analytics.
                  </p>
                  <ul>
                    <li>Inventory tracking</li>
                    <li>Customer loyalty</li>
                    <li>Promotions &amp; discounts</li>
                    <li>Sales reporting</li>
                  </ul>
                  <a href="products.html" className="btn btn-outline">
                    View More
                  </a>
                </div>
                {/* Van Sales */}
                <div className="solution-card">
                  <div className="solution-icon">
                    <i className="fas fa-truck" />
                  </div>
                  <h3>Van Sales</h3>
                  <p>
                    Mobile sales solution with route optimization and inventory
                    tracking.
                  </p>
                  <ul>
                    <li>Route optimization</li>
                    <li>Mobile invoicing</li>
                    <li>Stock tracking</li>
                    <li>Customer visits</li>
                  </ul>
                  <a href="products.html" className="btn btn-outline">
                    View More
                  </a>
                </div>
                {/* Hotel Management */}
                <div className="solution-card">
                  <div className="solution-icon">
                    <i className="fas fa-hotel" />
                  </div>
                  <h3>Hotel Management</h3>
                  <p>Effortless booking, billing, and guest management tools.</p>
                  <ul>
                    <li>Room booking</li>
                    <li>Guest check-in/out</li>
                    <li>Billing &amp; invoicing</li>
                    <li>Housekeeping</li>
                  </ul>
                  <a href="products.html" className="btn btn-outline">
                    View More
                  </a>
                </div>
                {/* Laundry */}
                <div className="solution-card">
                  <div className="solution-icon">
                    <i className="fas fa-tshirt" />
                  </div>
                  <h3>Laundry Management</h3>
                  <p>Efficient order tracking, billing, and delivery scheduling.</p>
                  <ul>
                    <li>Order tracking</li>
                    <li>Automated billing</li>
                    <li>Delivery scheduling</li>
                    <li>Customer management</li>
                  </ul>
                  <a href="products.html" className="btn btn-outline">
                    View More
                  </a>
                </div>
                {/* Beauty Salon */}
                <div className="solution-card">
                  <div className="solution-icon">
                    <i className="fas fa-spa" />
                  </div>
                  <h3>Beauty Saloon Management</h3>
                  <p>Appointments, services, staff, and billing in one system.</p>
                  <ul>
                    <li>Appointment scheduling</li>
                    <li>Service management</li>
                    <li>Staff management</li>
                    <li>Customer billing</li>
                  </ul>
                  <a href="products.html" className="btn btn-outline">
                    View More
                  </a>
                </div>
                {/* Tailoring */}
                <div className="solution-card">
                  <div className="solution-icon">
                    <i className="fas fa-cut" />
                  </div>
                  <h3>Tailoring Software</h3>
                  <p>Automated order entry and measurement tracking.</p>
                  <ul>
                    <li>Order automation</li>
                    <li>Measurement tracking</li>
                    <li>Delivery scheduling</li>
                    <li>Customer profiles</li>
                  </ul>
                  <a href="products.html" className="btn btn-outline">
                    View More
                  </a>
                </div>
                {/* Travels */}
                <div className="solution-card">
                  <div className="solution-icon">
                    <i className="fas fa-plane" />
                  </div>
                  <h3>Travels and Tours</h3>
                  <p>Bookings, itineraries, and customer communication.</p>
                  <ul>
                    <li>Booking management</li>
                    <li>Itinerary planning</li>
                    <li>Customer communication</li>
                    <li>Package management</li>
                  </ul>
                  <a href="products.html" className="btn btn-outline">
                    View More
                  </a>
                </div>
                {/* Queue */}
                <div className="solution-card">
                  <div className="solution-icon">
                    <i className="fas fa-list-ol" />
                  </div>
                  <h3>Queue Management</h3>
                  <p>Reduce waiting time with smart queue systems.</p>
                  <ul>
                    <li>Smart queueing</li>
                    <li>Flow optimization</li>
                    <li>Waiting time reduction</li>
                    <li>Real-time monitoring</li>
                  </ul>
                  <a href="products.html" className="btn btn-outline">
                    View More
                  </a>
                </div>
              </div>
            </div>
            <button
              className="carousel-btn carousel-btn-next"
              aria-label="Next solutions"
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>
      {/* Industry-Specific Business Management Solutions Section */}
      <section
        className="section"
        style={{
          background: "#ffffff",
          padding: "80px 0 30px 0",
          fontFamily: '"Poppins", sans-serif'
        }}
      >
        <div
          className="container"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}
        >
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2
              style={{
                fontSize: "2.25rem",
                fontWeight: 700,
                color: "#000000",
                marginBottom: 15
              }}
            >
              Industry-Specific Business Management Solutions
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#666666",
                maxWidth: 800,
                margin: "0 auto",
                lineHeight: "1.6"
              }}
            >
              Customized software modules designed to simplify operations, improve
              efficiency, and boost profitability across diverse industries.
            </p>
          </div>
          {/* Main Content Flex Layout */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 40,
              marginBottom: 60
            }}
          >
            {/* Left Column (35%) */}
            <div
              style={{
                width: "35%",
                textAlign: "right",
                display: "flex",
                flexDirection: "column",
                gap: 32
              }}
            >
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: 20,
                  background: "rgba(255,255,255,0.8)"
                }}
              >
                <h3
                  style={{
                    color: "#1a4d9b",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end"
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 8,
                      background: "#1a4d9b",
                      borderRadius: "50%",
                      marginRight: 8
                    }}
                  />
                  Tailoring Software
                  <svg
                    style={{
                      width: 40,
                      height: 40,
                      marginLeft: 12,
                      verticalAlign: "middle"
                    }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                  </svg>
                </h3>
                <p
                  style={{
                    color: "#333333",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.95rem"
                  }}
                >
                  Automate order entry, measurement tracking, and delivery schedules
                  for tailoring businesses.
                </p>
              </div>
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: 20,
                  background: "rgba(255,255,255,0.8)"
                }}
              >
                <h3
                  style={{
                    color: "#1a4d9b",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end"
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 8,
                      background: "#1a4d9b",
                      borderRadius: "50%",
                      marginRight: 8
                    }}
                  />
                  Travels and Tours
                  <svg
                    style={{
                      width: 40,
                      height: 40,
                      marginLeft: 12,
                      verticalAlign: "middle"
                    }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1={12} y1="22.08" x2={12} y2={12} />
                  </svg>
                </h3>
                <p
                  style={{
                    color: "#333333",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.95rem"
                  }}
                >
                  Handle bookings, itineraries, and customer communications
                  efficiently with our travel management system.
                </p>
              </div>
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: 20,
                  background: "rgba(255,255,255,0.8)"
                }}
              >
                <h3
                  style={{
                    color: "#1a4d9b",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end"
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 8,
                      background: "#1a4d9b",
                      borderRadius: "50%",
                      marginRight: 8
                    }}
                  />
                  Queue Management
                  <svg
                    style={{
                      width: 40,
                      height: 40,
                      marginLeft: 12,
                      verticalAlign: "middle"
                    }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <line x1={8} y1={6} x2={21} y2={6} />
                    <line x1={8} y1={12} x2={21} y2={12} />
                    <line x1={8} y1={18} x2={21} y2={18} />
                    <line x1={3} y1={6} x2="3.01" y2={6} />
                    <line x1={3} y1={12} x2="3.01" y2={12} />
                    <line x1={3} y1={18} x2="3.01" y2={18} />
                  </svg>
                </h3>
                <p
                  style={{
                    color: "#333333",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.95rem"
                  }}
                >
                  Optimize customer flow and reduce waiting times through smart
                  queue management.
                </p>
              </div>
            </div>
            {/* Center Column (30%) - Mobile Mockup */}
            <div style={{ width: "30%", textAlign: "center" }}>
              <div
                style={{
                  width: 250,
                  height: 500,
                  background: "#ffffff",
                  borderRadius: 30,
                  border: "2px solid #e5e7eb",
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden"
                }}
              >
                {/* Status Bar */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #0072FF 0%, #0FA958 100%)",
                    color: "white",
                    padding: "8px 16px",
                    fontSize: "0.75rem",
                    textAlign: "right"
                  }}
                >
                  9:41
                </div>
                {/* App Content */}
                <div
                  style={{
                    flex: 1,
                    background: "linear-gradient(135deg, #0072FF 0%, #0FA958 100%)",
                    color: "white",
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  {/* Branding */}
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      letterSpacing: 1
                    }}
                  >
                    waslasoft
                  </div>
                  {/* Analytics */}
                  <div
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: 12,
                      padding: 16
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 12
                      }}
                    >
                      <span style={{ fontSize: "0.875rem" }}>Revenue</span>
                      <span style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                        $24.5K
                      </span>
                    </div>
                    <div
                      style={{
                        height: 50,
                        background: "rgba(255,255,255,0.3)",
                        borderRadius: 6,
                        position: "relative"
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          background: "rgba(255,255,255,0.7)",
                          height: "75%",
                          borderRadius: 6
                        }}
                      ></div>
                      {/* Chart bars */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "10%",
                          width: "8%",
                          background: "white",
                          height: "40%",
                          borderRadius: 1
                        }}
                      ></div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "25%",
                          width: "8%",
                          background: "white",
                          height: "60%",
                          borderRadius: 1
                        }}
                      ></div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "40%",
                          width: "8%",
                          background: "white",
                          height: "45%",
                          borderRadius: 1
                        }}
                      ></div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "55%",
                          width: "8%",
                          background: "white",
                          height: "80%",
                          borderRadius: 1
                        }}
                      ></div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "70%",
                          width: "8%",
                          background: "white",
                          height: "65%",
                          borderRadius: 1
                        }}
                      ></div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "85%",
                          width: "8%",
                          background: "white",
                          height: "50%",
                          borderRadius: 1
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* Stats */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 12
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        borderRadius: 10,
                        padding: 12,
                        textAlign: "center"
                      }}
                    >
                      <div style={{ fontSize: "1rem", fontWeight: 600 }}>847</div>
                      <div style={{ fontSize: "0.75rem" }}>Orders</div>
                    </div>
                    <div
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        borderRadius: 10,
                        padding: 12,
                        textAlign: "center"
                      }}
                    >
                      <div style={{ fontSize: "1rem", fontWeight: 600 }}>92%</div>
                      <div style={{ fontSize: "0.75rem" }}>Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column (35%) */}
            <div
              style={{
                width: "35%",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: 32
              }}
            >
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: 20,
                  background: "rgba(255,255,255,0.8)"
                }}
              >
                <h3
                  style={{
                    color: "#1a4d9b",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <svg
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 12,
                      verticalAlign: "middle"
                    }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M2 21h20" />
                    <path d="M5 21V7l5-5 5 5v14" />
                    <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
                    <line x1={15} y1={10} x2={15} y2={13} />
                    <line x1={9} y1={10} x2={9} y2={13} />
                  </svg>
                  Hotel Management
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 8,
                      background: "#1a4d9b",
                      borderRadius: "50%",
                      marginLeft: 8
                    }}
                  />
                </h3>
                <p
                  style={{
                    color: "#333333",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.95rem"
                  }}
                >
                  Streamline hotel operations with effortless booking, billing, and
                  guest management tools.
                </p>
              </div>
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: 20,
                  background: "rgba(255,255,255,0.8)"
                }}
              >
                <h3
                  style={{
                    color: "#1a4d9b",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <svg
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 12,
                      verticalAlign: "middle"
                    }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M20.38 3.46 16 2a4 4 0 0 0-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                  </svg>
                  Laundry Management
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 8,
                      background: "#1a4d9b",
                      borderRadius: "50%",
                      marginLeft: 8
                    }}
                  />
                </h3>
                <p
                  style={{
                    color: "#333333",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.95rem"
                  }}
                >
                  Simplify order tracking, billing, and delivery with an efficient
                  laundry management solution.
                </p>
              </div>
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: 20,
                  background: "rgba(255,255,255,0.8)"
                }}
              >
                <h3
                  style={{
                    color: "#1a4d9b",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <svg
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 12,
                      verticalAlign: "middle"
                    }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx={12} cy={12} r={4} />
                    <path d="M12 2a2 2 0 0 0-2 2c0 1.13.13 2.5.5 3.5l-2 2c-.58.58-.58 1.52 0 2.1l2.1 2.1c.58.58 1.52.58 2.1 0l2-2c1-.37 2.37-.5 3.5-.5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-8z" />
                    <path d="M12 22a2 2 0 0 0 2-2c0-1.13-.13-2.5-.5-3.5l2-2c.58-.58.58-1.52 0-2.1l-2.1-2.1c-.58-.58-1.52-.58-2.1 0l-2 2c-1 .37-2.37.5-3.5.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8z" />
                  </svg>
                  Beauty Saloon Management
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 8,
                      background: "#1a4d9b",
                      borderRadius: "50%",
                      marginLeft: 8
                    }}
                  />
                </h3>
                <p
                  style={{
                    color: "#333333",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.95rem"
                  }}
                >
                  Manage appointments, services, staff, and customer billing
                  seamlessly in one system.
                </p>
              </div>
            </div>
          </div>
          {/* Integration Logos Section */}
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 60,
                marginBottom: 20
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/d/1w_FnTJItO8z3CaAAXEG0krJkyYahuh0f"
                alt="Integration Partners"
                style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
            <p
              style={{
                color: "#666666",
                fontSize: "0.95rem",
                lineHeight: "1.5",
                maxWidth: 600,
                margin: "0 auto"
              }}
            >
              Seamlessly integrate with leading platforms to ensure smooth data
              synchronization across all your business tools.
            </p>
          </div>
          {/* Enhanced CTA Button */}
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href="contact.html"
              style={{
                background: "#1a4d9b",
                color: "white",
                padding: "16px 48px",
                borderRadius: 25,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1.05rem",
                display: "inline-block",
                transition: "all 0.3s ease"
              }}
            >
              Transform Your Business Operations
            </a>
            <p style={{ marginTop: 15, color: "#666666", fontSize: "0.875rem" }}>
              14-day free trial • No credit card required • Full support included
            </p>
          </div>
          {/* Horizontal Grey Line */}
          <div
            style={{
              width: "100%",
              height: 1,
              background: "#e0e0e0",
              margin: "40px 0"
            }}
          />
        </div>
        {/* Responsive Styles */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n            @media (max-width: 768px) {\n                .section[style*="padding: 80px 0"] {\n                    padding: 60px 0 !important;\n                }\n\n                .section>.container>div[style*="display: flex"] {\n                    flex-direction: column !important;\n                    align-items: center !important;\n                    text-align: center !important;\n                }\n\n                .section>.container>div[style*="display: flex"]>div[style*="width: 35%"],\n                .section>.container>div[style*="display: flex"]>div[style*="width: 30%"] {\n                    width: 100% !important;\n                    text-align: center !important;\n                    margin-bottom: 30px !important;\n                }\n\n                .section>.container>div[style*="display: flex"]>div[style*="text-align: right"],\n                .section>.container>div[style*="display: flex"]>div[style*="text-align: left"] {\n                    text-align: center !important;\n                }\n\n                .section>.container>div[style*="display: flex"]>div>div {\n                    margin-bottom: 20px !important;\n                }\n\n                .section>.container>div[style*="display: flex"]>div>div>h3 {\n                    font-size: 1.1rem !important;\n                }\n\n                .section>.container>div[style*="display: flex"]>div>div>p {\n                    font-size: 0.875rem !important;\n                }\n\n                .section>.container>div[style*="display: flex"]>div[style*="width: 30%"]>div {\n                    width: 200px !important;\n                    height: 400px !important;\n                }\n\n                .section>.container>div[style*="display: flex"][style*="justify-content: center"][style*="gap: 60px"] {\n                    gap: 30px !important;\n                    flex-wrap: wrap !important;\n                }\n\n                .section>.container>div[style*="display: flex"][style*="justify-content: center"][style*="gap: 60px"] img {\n                    height: 30px !important;\n                }\n            }\n        '
          }}
        />
      </section>
      {/* Why Choose Section */}
      <section className="section why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose WaslaSoft?</h2>
          <div className="features-layout">
            {/* LEFT TABS */}
            <div className="features-tabs">
              <div className="tab-item active" data-tab="integration">
                <div className="tab-icon">
                  <i className="fas fa-link" />
                </div>
                <div className="tab-title">Integration</div>
              </div>
              <div className="tab-item" data-tab="hybrid">
                <div className="tab-icon">
                  <i className="fas fa-laptop-code" />
                </div>
                <div className="tab-title">Hybrid ERP &amp; POS</div>
              </div>
              <div className="tab-item" data-tab="integrations">
                <div className="tab-icon">
                  <i className="fas fa-plug" />
                </div>
                <div className="tab-title">Easy Integrations</div>
              </div>
              <div className="tab-item" data-tab="features">
                <div className="tab-icon">
                  <i className="fas fa-cogs" />
                </div>
                <div className="tab-title">Rich Features</div>
              </div>
              <div className="tab-item" data-tab="hosting">
                <div className="tab-icon">
                  <i className="fas fa-server" />
                </div>
                <div className="tab-title">Hosting</div>
              </div>
              <div className="tab-item" data-tab="mobile">
                <div className="tab-icon">
                  <i className="fas fa-mobile-alt" />
                </div>
                <div className="tab-title">Mobile Apps</div>
              </div>
            </div>
            {/* RIGHT CONTENT */}
            <div className="features-content">
              {/* INTEGRATION */}
              <div className="tab-content active" id="integration">
                <h3>Integration</h3>
                <p>
                  Seamlessly connect with leading business platforms including Odoo,
                  Zoho, QuickBooks, and Tally for unified operations.
                </p>
                <ul>
                  <li>
                    <strong>Odoo Integration:</strong> Sync customer data,
                    inventory, and orders with real-time updates
                  </li>
                  <li>
                    <strong>Zoho Integration:</strong> Connect CRM, accounting, and
                    project management workflows
                  </li>
                  <li>
                    <strong>QuickBooks Integration:</strong> Automatic financial
                    data synchronization and reporting
                  </li>
                  <li>
                    <strong>Tally Integration:</strong> Seamless accounting and
                    compliance management
                  </li>
                </ul>
                <h4>Mobile App Features</h4>
                <ul>
                  <li>
                    <strong>Reports:</strong> Access sales, inventory, and financial
                    reports on-the-go
                  </li>
                  <li>
                    <strong>Order Taking:</strong> Create and process orders
                    directly from mobile devices
                  </li>
                  <li>
                    <strong>Online Orders:</strong> Manage e-commerce orders with
                    real-time sync
                  </li>
                  <li>
                    <strong>Price &amp; Stock Checking:</strong> Instant product
                    pricing and inventory availability
                  </li>
                </ul>
              </div>
              {/* HYBRID */}
              <div className="tab-content" id="hybrid">
                <h3>Hybrid ERP &amp; POS</h3>
                <p>
                  Our hybrid solution works both online and offline, ensuring your
                  business never stops. Access your data anywhere, anytime.
                </p>
                <ul>
                  <li>Offline functionality when internet is down</li>
                  <li>Automatic sync when connection restored</li>
                  <li>Multi-location support</li>
                  <li>Real-time data synchronization</li>
                </ul>
              </div>
              {/* EASY INTEGRATIONS */}
              <div className="tab-content" id="integrations">
                <h3>Easy Integrations</h3>
                <p>
                  Seamlessly integrate with popular third-party services and APIs to
                  extend functionality.
                </p>
                <ul>
                  <li>Payment gateway integrations</li>
                  <li>Accounting software synchronization</li>
                  <li>E-commerce platform connections</li>
                  <li>Custom API development</li>
                </ul>
              </div>
              {/* FEATURES */}
              <div className="tab-content" id="features">
                <h3>Rich Features</h3>
                <p>
                  Comprehensive feature set covering all aspects of your business
                  operations.
                </p>
                <ul>
                  <li>Inventory management with barcode support</li>
                  <li>Customer relationship management (CRM)</li>
                  <li>Employee management and payroll</li>
                  <li>Advanced reporting and analytics</li>
                </ul>
              </div>
              {/* HOSTING */}
              <div className="tab-content" id="hosting">
                <h3>Hosting Options</h3>
                <p>
                  Choose the deployment model that best fits your business needs and
                  infrastructure requirements.
                </p>
                <ul>
                  <li>
                    <strong>On-Premise Hosting:</strong> Complete control over your
                    infrastructure
                  </li>
                  <li>
                    <strong>Cloud Hosting:</strong> Scalable and secure cloud
                    deployment
                  </li>
                  <li>
                    <strong>Hybrid Deployment:</strong> Best of both worlds
                  </li>
                  <li>
                    <strong>Data Security:</strong> Enterprise-grade encryption and
                    security
                  </li>
                </ul>
                <h4>Hosting Benefits</h4>
                <ul>
                  <li>
                    <strong>99.9% Uptime:</strong> High availability
                  </li>
                  <li>
                    <strong>Automatic Backups:</strong> Daily backups with recovery
                    options
                  </li>
                  <li>
                    <strong>Scalability:</strong> Grow as your business grows
                  </li>
                  <li>
                    <strong>Cost Effective:</strong> Reduced infrastructure costs
                  </li>
                </ul>
              </div>
              {/* MOBILE */}
              <div className="tab-content" id="mobile">
                <h3>Mobile Apps</h3>
                <p>
                  Native mobile applications for iOS and Android devices for
                  on-the-go management.
                </p>
                <ul>
                  <li>Native iOS and Android apps</li>
                  <li>Real-time notifications</li>
                  <li>Barcode scanning</li>
                  <li>Offline data access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Powerful Features Section */}
      <section className="section powerful-features">
        <div className="container">
          <h2 className="section-title">Powerful Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-chart-bar" />
              </div>
              <h3>Analytics &amp; Reporting</h3>
              <p>
                Comprehensive business intelligence with real-time dashboards and
                custom reports.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-shield-alt" />
              </div>
              <h3>Security &amp; Backup</h3>
              <p>
                Enterprise-grade security with automated backups and data
                encryption.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-users-cog" />
              </div>
              <h3>User Management</h3>
              <p>
                Role-based access control with comprehensive user permission
                settings.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-cloud" />
              </div>
              <h3>Cloud Sync</h3>
              <p>
                Automatic synchronization across all devices with offline
                capability.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-credit-card" />
              </div>
              <h3>Payment Processing</h3>
              <p>Integrated payment solutions with multiple gateway support.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-headset" />
              </div>
              <h3>24/7 Support</h3>
              <p>
                Round-the-clock customer support with dedicated account managers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Case Study */}
      <section className="section case-study">
        <div className="container">
          {/* Case Studies Heading */}
          <div
            className="section-header"
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <h2 className="section-title" style={{ marginBottom: 15 }}>
              Success Stories
            </h2>
            <p
              className="section-subtitle"
              style={{
                fontSize: "1.2rem",
                color: "#666",
                maxWidth: 800,
                margin: "0 auto"
              }}
            >
              Discover how businesses across industries have transformed their
              operations with WaslaSoft's comprehensive solutions
            </p>
          </div>
          {/* Case Studies Container */}
          <div className="case-studies-container">
            {/* Case Study 1 - Restaurant Chain */}
            <div className="case-study-card active" data-case={0}>
              <div className="case-study-content">
                <div className="case-study-left">
                  <div className="case-study-info">
                    <h3 className="case-study-title">
                      Restaurant Chain Digital Transformation
                    </h3>
                    <div
                      style={{
                        margin: "20px 0",
                        padding: 20,
                        background:
                          "linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%)",
                        borderRadius: 12,
                        borderLeft: "4px solid #097f52"
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#444",
                          lineHeight: "1.6",
                          margin: 0
                        }}
                      >
                        A leading restaurant chain with 15 locations transformed
                        their operations using WaslaSoft's integrated POS and
                        inventory management system, resulting in 40% faster service
                        and 25% cost reduction.
                      </p>
                      <div
                        style={{
                          marginTop: 15,
                          display: "flex",
                          gap: 15,
                          flexWrap: "wrap"
                        }}
                      >
                        <span
                          style={{
                            background: "#097f52",
                            color: "white",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          40% Faster Service
                        </span>
                        <span
                          style={{
                            background: "#0FA958",
                            color: "white",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          25% Cost Reduction
                        </span>
                        <span
                          style={{
                            background: "#ffdc00",
                            color: "#333",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          Real-time Analytics
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case-study-right">
                  <div className="case-study-separator" />
                  <div className="case-study-challenges">
                    <h4>Business Challenges</h4>
                    <ul>
                      <li>
                        Long customer wait times during peak hours due to manual
                        order processing and payment systems.
                      </li>
                      <li>
                        Inconsistent inventory tracking leading to frequent
                        stockouts and overordering of ingredients.
                      </li>
                      <li>
                        Limited visibility into sales data and customer preferences
                        across all locations.
                      </li>
                    </ul>
                    <div className="case-study-buttons">
                      <a href="company.html" className="btn btn-read-more">
                        Read Full Case Study
                      </a>
                      <button
                        className="btn btn-view-demo"
                        onclick="openDemoModal('restaurant')"
                      >
                        <i className="fas fa-play" /> Watch Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Case Study 2 - Retail Store */}
            <div className="case-study-card" data-case={1}>
              <div className="case-study-content">
                <div className="case-study-left">
                  <div className="case-study-info">
                    <h3 className="case-study-title">
                      Retail Store Inventory Revolution
                    </h3>
                    <div
                      style={{
                        margin: "20px 0",
                        padding: 20,
                        background:
                          "linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%)",
                        borderRadius: 12,
                        borderLeft: "4px solid #097f52"
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#444",
                          lineHeight: "1.6",
                          margin: 0
                        }}
                      >
                        A multi-location retail store implemented WaslaSoft's retail
                        POS and inventory management, achieving 99% inventory
                        accuracy and 60% reduction in stock management time.
                      </p>
                      <div
                        style={{
                          marginTop: 15,
                          display: "flex",
                          gap: 15,
                          flexWrap: "wrap"
                        }}
                      >
                        <span
                          style={{
                            background: "#097f52",
                            color: "white",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          99% Accuracy
                        </span>
                        <span
                          style={{
                            background: "#0FA958",
                            color: "white",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          60% Time Saved
                        </span>
                        <span
                          style={{
                            background: "#ffdc00",
                            color: "#333",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          Multi-location Sync
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case-study-right">
                  <div className="case-study-separator" />
                  <div className="case-study-challenges">
                    <h4>Business Challenges</h4>
                    <ul>
                      <li>
                        Manual inventory counting consuming 20+ hours weekly across
                        all store locations.
                      </li>
                      <li>
                        Frequent discrepancies between physical stock and system
                        records causing lost sales.
                      </li>
                      <li>
                        Inability to track customer purchase history and preferences
                        for personalized marketing.
                      </li>
                    </ul>
                    <div className="case-study-buttons">
                      <a href="company.html" className="btn btn-read-more">
                        Read Full Case Study
                      </a>
                      <button
                        className="btn btn-view-demo"
                        onclick="openDemoModal('retail')"
                      >
                        <i className="fas fa-play" /> Watch Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Case Study 3 - Logistics Company */}
            <div className="case-study-card" data-case={2}>
              <div className="case-study-content">
                <div className="case-study-left">
                  <div className="case-study-info">
                    <h3 className="case-study-title">Logistics Fleet Management</h3>
                    <div
                      style={{
                        margin: "20px 0",
                        padding: 20,
                        background:
                          "linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%)",
                        borderRadius: 12,
                        borderLeft: "4px solid #097f52"
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#444",
                          lineHeight: "1.6",
                          margin: 0
                        }}
                      >
                        A logistics company with 50+ vehicles optimized their fleet
                        operations using WaslaSoft's van sales and route management
                        features, reducing fuel costs by 30% and improving delivery
                        times.
                      </p>
                      <div
                        style={{
                          marginTop: 15,
                          display: "flex",
                          gap: 15,
                          flexWrap: "wrap"
                        }}
                      >
                        <span
                          style={{
                            background: "#097f52",
                            color: "white",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          30% Fuel Savings
                        </span>
                        <span
                          style={{
                            background: "#0FA958",
                            color: "white",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          Route Optimization
                        </span>
                        <span
                          style={{
                            background: "#ffdc00",
                            color: "#333",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          Real-time Tracking
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case-study-right">
                  <div className="case-study-separator" />
                  <div className="case-study-challenges">
                    <h4>Business Challenges</h4>
                    <ul>
                      <li>
                        Inefficient route planning leading to excessive fuel
                        consumption and delayed deliveries.
                      </li>
                      <li>
                        Lack of real-time visibility into vehicle locations and
                        delivery status.
                      </li>
                      <li>
                        Manual order processing causing errors and customer
                        dissatisfaction.
                      </li>
                    </ul>
                    <div className="case-study-buttons">
                      <a href="company.html" className="btn btn-read-more">
                        Read Full Case Study
                      </a>
                      <button
                        className="btn btn-view-demo"
                        onclick="openDemoModal('logistics')"
                      >
                        <i className="fas fa-play" /> Watch Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Case Study 4 - Hotel Chain */}
            <div className="case-study-card" data-case={3}>
              <div className="case-study-content">
                <div className="case-study-left">
                  <div className="case-study-info">
                    <h3 className="case-study-title">
                      Hotel Chain Digital Excellence
                    </h3>
                    <div
                      style={{
                        margin: "20px 0",
                        padding: 20,
                        background:
                          "linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%)",
                        borderRadius: 12,
                        borderLeft: "4px solid #097f52"
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#444",
                          lineHeight: "1.6",
                          margin: 0
                        }}
                      >
                        A hotel chain with 25 properties implemented WaslaSoft's
                        hotel management system, achieving 95% guest satisfaction
                        and 50% reduction in check-in time.
                      </p>
                      <div
                        style={{
                          marginTop: 15,
                          display: "flex",
                          gap: 15,
                          flexWrap: "wrap"
                        }}
                      >
                        <span
                          style={{
                            background: "#097f52",
                            color: "white",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          95% Satisfaction
                        </span>
                        <span
                          style={{
                            background: "#0FA958",
                            color: "white",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          50% Faster Check-in
                        </span>
                        <span
                          style={{
                            background: "#ffdc00",
                            color: "#333",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          Centralized Booking
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case-study-right">
                  <div className="case-study-separator" />
                  <div className="case-study-challenges">
                    <h4>Business Challenges</h4>
                    <ul>
                      <li>
                        Lengthy check-in process causing guest frustration and long
                        queues at reception.
                      </li>
                      <li>
                        Inability to manage room bookings, housekeeping, and billing
                        from a single system.
                      </li>
                      <li>
                        Lack of integration between different hotel management
                        systems across properties.
                      </li>
                    </ul>
                    <div className="case-study-buttons">
                      <a href="company.html" className="btn btn-read-more">
                        Read Full Case Study
                      </a>
                      <button
                        className="btn btn-view-demo"
                        onclick="openDemoModal('hotel')"
                      >
                        <i className="fas fa-play" /> Watch Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-study-card" data-case={4}>
              <div className="case-study-content">
                <div className="case-study-left">
                  <div className="case-study-info">
                    <h3 className="case-study-title">
                      WaslaSoft — Cloud-Enabled ERP &amp; POS Solution
                    </h3>
                    <div
                      style={{
                        margin: "20px 0",
                        padding: 20,
                        background:
                          "linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%)",
                        borderRadius: 12,
                        borderLeft: "4px solid #097f52"
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#444",
                          lineHeight: "1.6",
                          margin: 0
                        }}
                      >
                        A comprehensive enterprise solution that transforms how
                        businesses manage operations, sales, inventory, and customer
                        relationships through seamless cloud integration and
                        real-time data synchronization.
                      </p>
                      <div
                        style={{
                          marginTop: 15,
                          display: "flex",
                          gap: 15,
                          flexWrap: "wrap"
                        }}
                      >
                        <span
                          style={{
                            background: "#097f52",
                            color: "white",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          ERP Integration
                        </span>
                        <span
                          style={{
                            background: "#0FA958",
                            color: "white",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          Cloud Sync
                        </span>
                        <span
                          style={{
                            background: "#ffdc00",
                            color: "#333",
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "0.85rem",
                            fontWeight: 500
                          }}
                        >
                          Real-time Analytics
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case-study-right">
                  <div className="case-study-separator" />
                  <div className="case-study-challenges">
                    <h4>Business Challenges</h4>
                    <ul>
                      <li>
                        Fragmented systems — separate tools for sales, inventory,
                        finance, and workforce management created inefficient
                        workflows.
                      </li>
                      <li>
                        Offline limitations — traditional POS systems often broke
                        down without internet access, leading to lost sales or data.
                      </li>
                    </ul>
                    <div className="case-study-buttons">
                      <a href="company.html" className="btn btn-read-more">
                        Read More
                      </a>
                      <button
                        className="btn btn-view-demo"
                        onclick="openDemoModal('hotel')"
                      >
                        <i className="fas fa-play" /> Watch Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Case Study Navigation Arrows */}
          <div className="case-study-navigation">
            <button className="nav-arrow nav-prev" aria-label="Previous case study">
              <i className="fas fa-chevron-left" />
            </button>
            <button className="nav-arrow nav-next" aria-label="Next case study">
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>
      {/* Our Clients Section */}
      <section className="section clients">
        <div className="container">
          <div className="clients-header">
            <h2 className="section-title">Trusted by Leading Businesses</h2>
            <p className="section-subtitle">
              Join thousands of satisfied customers who have transformed their
              operations with WaslaSoft
            </p>
          </div>
          <div className="clients-grid">
            <div className="client-logo">
              <div className="logo-placeholder">
                <img src="images/logo1.svg" alt="" />
              </div>
              <span className="client-name">TechCorp</span>
            </div>
            <div className="client-logo">
              <div className="logo-placeholder">
                <img src="images/logo2.svg" alt="" />
              </div>
              <span className="client-name">RetailMax</span>
            </div>
            <div className="client-logo">
              <div className="logo-placeholder">
                <img src="images/logo3.svg" alt="" />
              </div>
              <span className="client-name">FoodChain</span>
            </div>
            <div className="client-logo">
              <div className="logo-placeholder">
                <img src="images/logo4.svg" alt="" />
              </div>
              <span className="client-name">LogiServe</span>
            </div>
            <div className="client-logo">
              <div className="logo-placeholder">
                <img src="images/logo5.svg" alt="" />
              </div>
              <span className="client-name">ShopSmart</span>
            </div>
            <div className="client-logo">
              <div className="logo-placeholder">
                <img src="images/logo6.svg" alt="" />
              </div>
              <span className="client-name">HospitalityPro</span>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-container">
            <div className="testimonials-carousel">
              <div className="testimonial-card active">
                <div className="testimonial-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="testimonial-content">
                  <p>
                    "WaslaSoft has transformed our business operations. The hybrid
                    functionality is exactly what we needed for our remote
                    locations."
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <i className="fas fa-user" />
                  </div>
                  <div className="author-info">
                    <h4>John Smith</h4>
                    <p>Restaurant Owner</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="testimonial-content">
                  <p>
                    "The integration capabilities are outstanding. We connected all
                    our existing systems seamlessly."
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <i className="fas fa-user" />
                  </div>
                  <div className="author-info">
                    <h4>Sarah Johnson</h4>
                    <p>Retail Manager</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="testimonial-content">
                  <p>
                    "Customer support is exceptional. They helped us migrate from
                    our old system without any downtime."
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <i className="fas fa-user" />
                  </div>
                  <div className="author-info">
                    <h4>Michael Chen</h4>
                    <p>Operations Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="section faq" id="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                <h3>What is WaslaSoft?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  WaslaSoft is a cloud-enabled hybrid ERP &amp; POS solution that
                  helps businesses manage sales, inventory, accounting, HR, and more
                  - both online and offline.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>How does the hybrid functionality work?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  Our hybrid system allows you to continue operations even without
                  internet connection. Data automatically syncs when connection is
                  restored, ensuring seamless business continuity.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Can I integrate WaslaSoft with my existing systems?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  Yes! WaslaSoft offers extensive integration capabilities with
                  popular business tools, accounting software, and third-party
                  applications through APIs and connectors.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Is my data secure?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  Absolutely. We use enterprise-grade encryption, regular backups,
                  and comply with industry security standards to ensure your
                  business data is always protected.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>What kind of support do you offer?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  We provide 24/7 customer support with dedicated account managers,
                  comprehensive documentation, video tutorials, and regular training
                  sessions to ensure your success.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>How much does it cost?</h3>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="faq-answer">
                <p>
                  We offer flexible pricing plans based on your business size and
                  requirements. Contact us for a free consultation and customized
                  quote tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="section contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to Transform Your Business?</h3>
              <p>
                Contact us today to learn how WaslaSoft can streamline your
                operations and boost your productivity.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-phone" />
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope" />
                  <div>
                    <h4>Email</h4>
                    <p>info@waslasoft.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt" />
                  <div>
                    <h4>Address</h4>
                    <p>
                      123 Business Avenue, Suite 100
                      <br />
                      New York, NY 10001
                    </p>
                    <a
                      href="https://wa.me/15551234567"
                      className="whatsapp-btn"
                      style={{
                        display: "inline-block",
                        background: "#25D366",
                        color: "white",
                        padding: "8px 16px",
                        borderRadius: 20,
                        textDecoration: "none",
                        fontSize: 14,
                        marginTop: 10,
                        transition: "background 0.3s ease"
                      }}
                    >
                      <i className="fab fa-whatsapp" style={{ marginRight: 5 }} />
                      Connect via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="contact-form-container">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="form-group">
                  <select id="interest" name="interest" required="">
                    <option value="">Select Your Interest</option>
                    <option value="pos">Point of Sale</option>
                    <option value="erp">ERP System</option>
                    <option value="mobile">Mobile Solutions</option>
                    <option value="demo">Schedule Demo</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* Partner Network Section */}
          <div
            className="partner-network-card"
            style={{
              background: "linear-gradient(135deg, #0072FF 0%, #0FA958 100%)",
              borderRadius: 15,
              padding: "60px 40px",
              margin: "40px 0",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: 60,
                alignItems: "center"
              }}
            >
              {/* Artwork Section */}
              <div
                className="partner-artwork"
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 15,
                  padding: 40,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}
              >
                <div style={{ position: "relative", width: 120, height: 120 }}>
                  {/* Partner Network Icon */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(255,255,255,0.9)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                      border: "2px solid rgba(255,255,255,0.3)"
                    }}
                  >
                    <i
                      className="fas fa-handshake"
                      style={{ fontSize: "3rem", color: "#097f52" }}
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      width: 40,
                      height: 40,
                      background: "rgba(255,220,0,0.8)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <i
                      className="fas fa-star"
                      style={{ fontSize: "1rem", color: "white" }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-15px",
                      left: "-15px",
                      width: 30,
                      height: 30,
                      background: "rgba(255,255,255,0.6)",
                      borderRadius: "50%"
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "-30px",
                      width: 20,
                      height: 20,
                      background: "rgba(255,255,255,0.4)",
                      borderRadius: "50%"
                    }}
                  ></div>
                </div>
                {/* Network Lines */}
                <div
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "20%",
                    width: "60%",
                    height: "60%",
                    border: "2px dashed rgba(255,255,255,0.3)",
                    borderRadius: "50%"
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "30%",
                    width: "40%",
                    height: "40%",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "50%"
                  }}
                ></div>
              </div>
              {/* Content Section */}
              <div className="partner-content">
                <h2
                  style={{
                    fontSize: "2.5rem",
                    marginBottom: 20,
                    color: "white",
                    fontWeight: 700
                  }}
                >
                  Join the WaslaSoft Partner Network
                </h2>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "rgba(255,255,255,0.9)",
                    marginBottom: 30,
                    lineHeight: "1.7"
                  }}
                >
                  Refer, resell, or implement WaslaSoft ERP — and grow your business
                  with our rewarding partner programs.
                </p>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                  <a
                    href="partners.html"
                    className="btn btn-primary"
                    style={{
                      background: "#ffdc00",
                      color: "#097f52",
                      border: "none",
                      padding: "16px 32px",
                      borderRadius: 30,
                      fontSize: "1rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                      display: "inline-block"
                    }}
                  >
                    View More
                  </a>
                  <a
                    href="contact.html"
                    className="btn btn-outline"
                    style={{
                      background: "transparent",
                      color: "white",
                      border: "2px solid white",
                      padding: "14px 30px",
                      borderRadius: 30,
                      fontSize: "1rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                      display: "inline-block"
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fixed Position Icons */}
      <div className="fixed-icons">
        <div className="icon-item" data-tooltip="reach-us">
          <i className="fas fa-handshake" />
          <div className="tooltip-content">
            <div className="tooltip-block">
              <h4>Reach Us</h4>
              <p>Get in touch with our team</p>
              <a href="contact.html" className="tooltip-link">
                Reach us
              </a>
            </div>
          </div>
        </div>
        <div className="icon-item" data-tooltip="read-blog">
          <i className="fas fa-blog" />
          <div className="tooltip-content">
            <div className="tooltip-block">
              <h4>Read Blog</h4>
              <p>Latest insights and updates</p>
              <a href="blog.html" className="tooltip-link">
                Read Blog
              </a>
            </div>
          </div>
        </div>
        <div className="icon-item" data-tooltip="contact-us">
          <i className="fas fa-envelope" />
          <div className="tooltip-content">
            <div className="tooltip-block">
              <h4>Contact Us</h4>
              <p>Send us a message</p>
              <a href="contact.html" className="tooltip-link">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="icon-item" data-tooltip="watch-tutorials">
          <i className="fas fa-play-circle" />
          <div className="tooltip-content">
            <div className="tooltip-block">
              <h4>Watch Video Tutorials</h4>
              <p>Learn with our video guides</p>
              <a href="#" className="tooltip-link">
                Watch Tutorials
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home