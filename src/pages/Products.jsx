import React from 'react'

function Products() {
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
            <h2 className="hero-subtitle">Comprehensive Business Solutions</h2>
            <p className="hero-description">
              Discover our range of enterprise solutions designed to streamline your
              business operations and drive growth.
            </p>
          </div>
        </div>
      </section>
      {/* Products Overview */}
      <section className="section white">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Complete Business Management Suite
          </h2>
          <p className="section-subtitle" style={{ margin: "10px auto 20px" }}>
            From point-of-sale to enterprise resource planning, we have the perfect
            solution for your business needs.
          </p>
          <div className="products-grid" style={{ overflowX: "hidden" }}>
            {/* Restaurant POS */}
            <div className="product-card">
              <div className="product-card-header restaurant">
                <i className="fas fa-utensils" />
              </div>
              <div className="product-card-body">
                <h3>Restaurant POS</h3>
                <p>
                  Streamline your restaurant operations with our comprehensive POS
                  system. Manage orders, track inventory, handle payments, and
                  analyze sales data all in one platform.
                </p>
                <ul>
                  <li>Table management and reservations</li>
                  <li>Kitchen display system</li>
                  <li>Menu engineering and pricing</li>
                  <li>Staff scheduling and payroll</li>
                  <li>Customer loyalty programs</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
            {/* Retail POS */}
            <div className="product-card">
              <div className="product-card-header retail">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="product-card-body">
                <h3>Retail POS</h3>
                <p>
                  Transform your retail business with our advanced point-of-sale
                  solution. Manage inventory, process transactions, and gain
                  valuable insights into customer behavior.
                </p>
                <ul>
                  <li>Multi-store management</li>
                  <li>Barcode scanning and labeling</li>
                  <li>Customer relationship management</li>
                  <li>Promotions and discounts</li>
                  <li>Real-time inventory tracking</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
            {/* Van Sales Management */}
            <div className="product-card">
              <div className="product-card-header van-sales">
                <i className="fas fa-truck" />
              </div>
              <div className="product-card-body">
                <h3>Van Sales Management</h3>
                <p>
                  Optimize your mobile sales operations with our comprehensive van
                  sales solution. Track routes, manage inventory, and process orders
                  on the go.
                </p>
                <ul>
                  <li>GPS tracking and route optimization</li>
                  <li>Mobile order processing</li>
                  <li>Inventory management</li>
                  <li>Customer visit tracking</li>
                  <li>Sales performance analytics</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
            {/* Hybrid ERP */}
            <div className="product-card">
              <div className="product-card-header hybrid-erp">
                <i className="fas fa-building" />
              </div>
              <div className="product-card-body">
                <h3>Hybrid ERP</h3>
                <p>
                  Integrate all aspects of your business with our enterprise
                  resource planning solution. Manage finance, operations, and human
                  resources seamlessly.
                </p>
                <ul>
                  <li>Financial management and accounting</li>
                  <li>Supply chain management</li>
                  <li>Human resources and payroll</li>
                  <li>Project management</li>
                  <li>Business intelligence and reporting</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
            {/* Inventory Management */}
            <div className="product-card">
              <div className="product-card-header inventory">
                <i className="fas fa-boxes" />
              </div>
              <div className="product-card-body">
                <h3>Inventory Management</h3>
                <p>
                  Take control of your inventory with our comprehensive management
                  system. Track stock levels, manage suppliers, and optimize your
                  supply chain.
                </p>
                <ul>
                  <li>Real-time stock tracking</li>
                  <li>Automated reorder points</li>
                  <li>Supplier management</li>
                  <li>Multi-location support</li>
                  <li>Demand forecasting</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
            {/* Analytics & Reporting */}
            <div className="product-card">
              <div className="product-card-header analytics">
                <i className="fas fa-chart-line" />
              </div>
              <div className="product-card-body">
                <h3>Analytics &amp; Reporting</h3>
                <p>
                  Make data-driven decisions with our comprehensive analytics and
                  reporting tools. Get insights into sales, customer behavior, and
                  business performance.
                </p>
                <ul>
                  <li>Customizable dashboards</li>
                  <li>Real-time reporting</li>
                  <li>Predictive analytics</li>
                  <li>Export capabilities</li>
                  <li>Automated alerts</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Join thousands of businesses that trust WaslaSoft for their
              operations.
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

export default Products