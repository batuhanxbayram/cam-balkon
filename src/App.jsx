import { Route, Routes, Link } from 'react-router-dom'
import Navbar from "./layout/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./layout/Footer.jsx";
// import About from "./components/about/About.jsx";
import ProductDetail from "./components/product/ProductDetail.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryPage from "./pages/CategoryPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import WhatsAppButton from "./components/home/WhatsappButton.jsx";
import ScrollToTop from "./components/home/ScroolToTop.jsx";
import ContactPage from "./pages/ContactPage.jsx";






function App() {
    return (
        <div>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/gallery" element={<Gallery/>}></Route>
                <Route path="/kategori/:categoryId" element={<CategoryPage />} />
                <Route path="/urun/:productId" element={<ProductDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <WhatsAppButton/>
            <Footer/>
        </div>
    )
}

export default App
