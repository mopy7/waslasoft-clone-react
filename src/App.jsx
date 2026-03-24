import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Features from "./pages/Features.jsx"
import Company from "./pages/Company.jsx"
import Partners from "./pages/Partners.jsx"
import FAQ from "./pages/FAQ.jsx"
import Blog from "./pages/Blog.jsx"
import Contact from "./pages/Contact.jsx"

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/features" element={<Features />} />
          <Route path="/company" element={<Company />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
