// pages/Home.jsx
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Home.css';

const Home = () => {
    const navigate = useNavigate();

    // Cam balkon örnek verileri
    const balconyProducts = [
        { id: 1, title: "Lüks Cam Balkon", description: "Şık ve dayanıklı lüks cam balkon sistemleri" },
        { id: 2, title: "Ekonomik Çözüm", description: "Uygun fiyatlı kaliteli cam balkon sistemleri" },
        { id: 3, title: "Panaromik Balkon", description: "Geniş açılı manzara keyfi sunan sistemler" },
        { id: 4, title: "Otomatik Sistem", description: "Akıllı otomasyonlu cam balkon çözümleri" },
        { id: 5, title: "Isı Yalıtımlı", description: "Enerji tasarruflu ısı yalıtımlı modeller" },
        { id: 6, title: "Özel Tasarım", description: "Mimarinize uygun özel üretim çözümler" }
    ];

    // Ürün detay sayfasına yönlendirme
    const handleProductDetail = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="home-container">
            {/* Hero Bölümü */}
            {/* Cam Balkon Ürünleri */}
            <section className="balcony-products">
                <h2 className="section-title">Ürünlerimiz</h2>
                <div className="products-grid">
                    {balconyProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-placeholder">
                                <span>Resim {product.id}</span>
                            </div>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <button
                                className="product-button"
                                onClick={() => handleProductDetail(product.id)}
                            >
                                Detaylı Bilgi
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <br/>
            <br/>
            <header className="hero-section">
                <h1>Hoş Geldiniz!</h1>
                <p>Cam balkon sistemlerinde kalite ve konforun adresi</p>
                <Link to="/about" className="cta-button">Hakkımızda</Link>
            </header>

            // Burayı düzelt

        </div>
    );
};

export default Home;