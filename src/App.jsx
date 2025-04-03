import { Route, Routes, Link } from 'react-router-dom'
import Navbar from "./layout/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./layout/Footer.jsx";
// import About from "./components/about/About.jsx";
import ProductDetail from "./components/product/Product.jsx";

const About = () => <h2>About Page</h2>


function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/" element={<Home />} />
                {/*<Route path="/about" element={<About />} />*/}

            </Routes>
            <Footer/>
        </div>
    )
}

export default App
