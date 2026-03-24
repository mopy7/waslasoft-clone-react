import React from 'react'

function Blog() {
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
            <h2 className="hero-subtitle">WaslaSoft Blog</h2>
            <p className="hero-description">
              Insights, trends, and best practices in ERP, POS, and business
              management technology
            </p>
          </div>
          <div style={{ maxWidth: 500, margin: "0 auto", position: "relative" }}>
            <input
              type="text"
              placeholder="Search blog posts..."
              style={{
                marginTop: 20,
                width: "100%",
                padding: "15px 50px 15px 20px",
                border: "none",
                borderRadius: 30,
                fontSize: "1rem",
                background: "rgba(255,255,255,0.2)",
                color: "white",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
              }}
            />
            <i
              className="fas fa-search"
              style={{
                position: "absolute",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
                fontSize: "1.2rem",
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}
            />
          </div>
        </div>
      </section>
      {/* Featured Post */}
      <section
        className="section featured-article-section"
        style={{ padding: "80px 0", background: "#f8f9fa" }}
      >
        <div className="container">
          <div
            className="featured-article-card"
            style={{
              background: "white",
              borderRadius: 15,
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "center"
            }}
          >
            {/* LEFT CONTENT */}
            <div className="featured-article-content" style={{ padding: 50 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#0072FF",
                  color: "white",
                  padding: "5px 15px",
                  borderRadius: 20,
                  fontSize: "0.9rem",
                  marginBottom: 20
                }}
              >
                Featured Article
              </div>
              <h2
                style={{
                  fontSize: "2rem",
                  color: "#333",
                  marginBottom: 20,
                  fontWeight: 600
                }}
              >
                <i
                  className="fas fa-star"
                  style={{ color: "#ffa500", marginRight: 10 }}
                />
                The Future of Retail: 7 Trends Shaping 2025
              </h2>
              <p style={{ color: "#666", lineHeight: "1.8", marginBottom: 25 }}>
                Discover how artificial intelligence, contactless payments, and
                omnichannel experiences are revolutionizing the retail landscape.
                Learn how forward-thinking retailers are adapting to meet changing
                consumer expectations.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 25,
                  flexWrap: "wrap"
                }}
              >
                <img
                  src="images/author-sarah.jpg"
                  alt="Author"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    marginRight: 10
                  }}
                />
                <div>
                  <div style={{ fontWeight: 500, color: "#333" }}>
                    <i
                      className="fas fa-user-edit"
                      style={{ marginRight: 8, color: "#0072FF" }}
                    />
                    Sarah Johnson
                  </div>
                  <div style={{ color: "#666", fontSize: "0.9rem" }}>
                    <i className="far fa-calendar" style={{ marginRight: 5 }} />
                    December 15, 2024
                    <i
                      className="far fa-clock"
                      style={{ marginLeft: 10, marginRight: 5 }}
                    />
                    8 min read
                    <i
                      className="far fa-eye"
                      style={{ marginLeft: 10, marginRight: 5 }}
                    />
                    1.2k views
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="btn"
                style={{
                  background: "#097f52",
                  color: "white",
                  padding: "12px 30px",
                  borderRadius: 25,
                  textDecoration: "none",
                  fontWeight: 500
                }}
              >
                Read Article
              </a>
            </div>
            {/* RIGHT IMAGE */}
            <div className="featured-article-image">
              <img
                src="images/blog-featured-retail.jpg"
                alt="Retail Technology"
                style={{ width: "100%", height: 400, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Blog Posts Grid */}
      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2
              style={{
                fontSize: "2.5rem",
                color: "#333",
                marginBottom: 20,
                fontWeight: 600
              }}
            >
              Latest Articles
            </h2>
            <p
              style={{
                color: "#666",
                fontSize: "1.1rem",
                maxWidth: 600,
                margin: "0 auto"
              }}
            >
              Stay updated with the latest insights and best practices in business
              technology
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: 40
            }}
          >
            {/* Blog Post 1 */}
            <article
              style={{
                background: "white",
                borderRadius: 15,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease"
              }}
            >
              <img
                src="images/blog-pos-trends.jpg"
                alt="POS Trends"
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <div style={{ padding: 30 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 15
                  }}
                >
                  <span
                    style={{
                      background: "#e8f5e8",
                      color: "#097f52",
                      padding: "4px 12px",
                      borderRadius: 15,
                      fontSize: "0.8rem",
                      fontWeight: 500
                    }}
                  >
                    <i className="fas fa-laptop" style={{ marginRight: 5 }} />
                    POS Systems
                  </span>
                  <span
                    style={{
                      color: "#666",
                      fontSize: "0.9rem",
                      marginLeft: "auto"
                    }}
                  >
                    <i className="far fa-calendar" style={{ marginRight: 5 }} /> Dec
                    10, 2024
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    color: "#333",
                    marginBottom: 15,
                    fontWeight: 600
                  }}
                >
                  5 POS Trends That Will Transform Retail in 2025
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6", marginBottom: 20 }}>
                  Explore the latest innovations in point-of-sale technology that
                  are reshaping how retailers interact with customers and manage
                  operations.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="images/author-lisa.jpg"
                      alt="Author"
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        marginRight: 8
                      }}
                    />
                    <span style={{ color: "#666", fontSize: "0.9rem" }}>
                      Mike Chen
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        color: "#0072FF",
                        textDecoration: "none",
                        fontWeight: 500
                      }}
                    >
                      Read More
                      <i className="fas fa-arrow-right" style={{ marginLeft: 5 }} />
                    </a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on Facebook"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on Twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on LinkedIn"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </article>
            {/* Blog Post 2 */}
            <article
              style={{
                background: "white",
                borderRadius: 15,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease"
              }}
            >
              <img
                src="images/blog-cloud-migration.jpg"
                alt="Cloud Migration"
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <div style={{ padding: 30 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 15
                  }}
                >
                  <span
                    style={{
                      background: "#e3f2fd",
                      color: "#1976d2",
                      padding: "4px 12px",
                      borderRadius: 15,
                      fontSize: "0.8rem",
                      fontWeight: 500
                    }}
                  >
                    <i className="fas fa-cloud" style={{ marginRight: 5 }} />
                    Cloud Technology
                  </span>
                  <span
                    style={{
                      color: "#666",
                      fontSize: "0.9rem",
                      marginLeft: "auto"
                    }}
                  >
                    <i className="far fa-calendar" style={{ marginRight: 5 }} /> Dec
                    8, 2024
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    color: "#333",
                    marginBottom: 15,
                    fontWeight: 600
                  }}
                >
                  Cloud Migration: A Complete Guide for SMEs
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6", marginBottom: 20 }}>
                  Learn the essential steps and best practices for successfully
                  migrating your business operations to the cloud.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="images/author-lisa.jpg"
                      alt="Author"
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        marginRight: 8
                      }}
                    />
                    <span style={{ color: "#666", fontSize: "0.9rem" }}>
                      Lisa Wang
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        color: "#0072FF",
                        textDecoration: "none",
                        fontWeight: 500
                      }}
                    >
                      Read More
                      <i className="fas fa-arrow-right" style={{ marginLeft: 5 }} />
                    </a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on Facebook"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on Twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on LinkedIn"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </article>
            {/* Blog Post 3 */}
            <article
              style={{
                background: "white",
                borderRadius: 15,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease"
              }}
            >
              <img
                src="images/blog-inventory-management.jpg"
                alt="Inventory Management"
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <div style={{ padding: 30 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 15
                  }}
                >
                  <span
                    style={{
                      background: "#fff3e0",
                      color: "#f57c00",
                      padding: "4px 12px",
                      borderRadius: 15,
                      fontSize: "0.8rem",
                      fontWeight: 500
                    }}
                  >
                    <i className="fas fa-boxes" style={{ marginRight: 5 }} />
                    Inventory Management
                  </span>
                  <span
                    style={{
                      color: "#666",
                      fontSize: "0.9rem",
                      marginLeft: "auto"
                    }}
                  >
                    <i className="far fa-calendar" /> Dec 5, 2024
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    color: "#333",
                    marginBottom: 15,
                    fontWeight: 600
                  }}
                >
                  Mastering Inventory Management in the Digital Age
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6", marginBottom: 20 }}>
                  Discover how modern inventory management systems can reduce costs,
                  prevent stockouts, and improve customer satisfaction.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="images/author-lisa.jpg"
                      alt="Author"
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        marginRight: 8
                      }}
                    />
                    <span style={{ color: "#666", fontSize: "0.9rem" }}>
                      David Park
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        color: "#0072FF",
                        textDecoration: "none",
                        fontWeight: 500
                      }}
                    >
                      Read More
                      <i className="fas fa-arrow-right" style={{ marginLeft: 5 }} />
                    </a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on Facebook"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on Twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on LinkedIn"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </article>
            {/* Blog Post 4 */}
            <article
              style={{
                background: "white",
                borderRadius: 15,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease"
              }}
            >
              <img
                src="images/blog-erp-benefits.jpg"
                alt="ERP Benefits"
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <div style={{ padding: 30 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 15
                  }}
                >
                  <span
                    style={{
                      background: "#fce4ec",
                      color: "#c2185b",
                      padding: "4px 12px",
                      borderRadius: 15,
                      fontSize: "0.8rem",
                      fontWeight: 500
                    }}
                  >
                    <i className="fas fa-sitemap" style={{ marginRight: 5 }} />
                    ERP Systems
                  </span>
                  <span
                    style={{
                      color: "#666",
                      fontSize: "0.9rem",
                      marginLeft: "auto"
                    }}
                  >
                    <i className="far fa-calendar" /> Dec 3, 2024
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    color: "#333",
                    marginBottom: 15,
                    fontWeight: 600
                  }}
                >
                  10 Benefits of ERP Systems for Small Businesses
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6", marginBottom: 20 }}>
                  Learn how enterprise resource planning systems can help small
                  businesses compete with larger competitors.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="images/author-lisa.jpg"
                      alt="Author"
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        marginRight: 8
                      }}
                    />
                    <span style={{ color: "#666", fontSize: "0.9rem" }}>
                      Anna Rodriguez
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        color: "#0072FF",
                        textDecoration: "none",
                        fontWeight: 500
                      }}
                    >
                      Read More
                      <i className="fas fa-arrow-right" style={{ marginLeft: 5 }} />
                    </a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on Facebook"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on Twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on LinkedIn"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </article>
            {/* Blog Post 5 */}
            <article
              style={{
                background: "white",
                borderRadius: 15,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease"
              }}
            >
              <img
                src="images/blog-cloud-migration.jpg"
                alt="Customer Experience"
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <div style={{ padding: 30 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 15
                  }}
                >
                  <span
                    style={{
                      background: "#e1f5fe",
                      color: "#0277bd",
                      padding: "4px 12px",
                      borderRadius: 15,
                      fontSize: "0.8rem",
                      fontWeight: 500
                    }}
                  >
                    Customer Experience
                  </span>
                  <span
                    style={{
                      color: "#666",
                      fontSize: "0.9rem",
                      marginLeft: "auto"
                    }}
                  >
                    <i className="far fa-calendar" /> Dec 1, 2024
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    color: "#333",
                    marginBottom: 15,
                    fontWeight: 600
                  }}
                >
                  Creating Exceptional Customer Experiences with Technology
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6", marginBottom: 20 }}>
                  Explore how the right technology stack can transform customer
                  interactions and build lasting relationships.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="images/author-lisa.jpg"
                      alt="Author"
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        marginRight: 8
                      }}
                    />
                    <span style={{ color: "#666", fontSize: "0.9rem" }}>
                      Tom Wilson
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        color: "#0072FF",
                        textDecoration: "none",
                        fontWeight: 500
                      }}
                    >
                      Read More
                      <i className="fas fa-arrow-right" style={{ marginLeft: 5 }} />
                    </a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on Facebook"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on Twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on LinkedIn"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </article>
            {/* Blog Post 6 */}
            <article
              style={{
                background: "white",
                borderRadius: 15,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease"
              }}
            >
              <img
                src="images/blog-inventory-management.jpg"
                alt="Data Analytics"
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <div style={{ padding: 30 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 15
                  }}
                >
                  <span
                    style={{
                      background: "#f3e5f5",
                      color: "#7b1fa2",
                      padding: "4px 12px",
                      borderRadius: 15,
                      fontSize: "0.8rem",
                      fontWeight: 500
                    }}
                  >
                    Data Analytics
                  </span>
                  <span
                    style={{
                      color: "#666",
                      fontSize: "0.9rem",
                      marginLeft: "auto"
                    }}
                  >
                    <i className="far fa-calendar" /> Nov 28, 2024
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    color: "#333",
                    marginBottom: 15,
                    fontWeight: 600
                  }}
                >
                  Data-Driven Decision Making for Modern Businesses
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6", marginBottom: 20 }}>
                  Learn how to leverage business intelligence and analytics to make
                  informed decisions that drive growth.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="images/author-lisa.jpg"
                      alt="Author"
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        marginRight: 8
                      }}
                    />
                    <span style={{ color: "#666", fontSize: "0.9rem" }}>
                      Sophie Brown
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        color: "#0072FF",
                        textDecoration: "none",
                        fontWeight: 500
                      }}
                    >
                      Read More
                      <i className="fas fa-arrow-right" style={{ marginLeft: 5 }} />
                    </a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on Facebook"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on Twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    style={{ color: "#666", fontSize: "1.1rem" }}
                    title="Share on LinkedIn"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section
        className="newsletter-section"
        style={{
          background: "linear-gradient(135deg, #0072FF 0%, #0FA958 100%)",
          color: "white",
          padding: "60px 0",
          textAlign: "center"
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", marginBottom: 20, fontWeight: 600 }}>
            <i className="fas fa-envelope-open-text" style={{ marginRight: 15 }} />
            Stay Updated
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: 600,
              margin: "0 auto 30px",
              opacity: "0.9"
            }}
          >
            Subscribe to our newsletter and never miss the latest insights and
            updates
          </p>
          <form
            className="newsletter-form"
            style={{ maxWidth: 500, margin: "0 auto", display: "flex", gap: 10 }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                flex: 1,
                padding: "15px 20px",
                border: "none",
                borderRadius: 30,
                fontSize: "1rem"
              }}
            />
            <button
              type="submit"
              style={{
                background: "white",
                color: "#0072FF",
                border: "none",
                padding: "15px 30px",
                borderRadius: 30,
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Blog