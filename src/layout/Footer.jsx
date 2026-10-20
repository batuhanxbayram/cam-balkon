// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Footer.css";
import { FiMapPin, FiBox, FiPhone ,FiInstagram } from 'react-icons/fi';
import { productCategories } from "../data/products.js"; // productCategories verisini import et

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Üst Kısım */}
                <div className="footer-top">
                    <h2>CAM BALKON TÜRKİYE</h2>
                    <p>Yaşam Alanlarınızda Fark Yaratan Çözümler. Evinizin Güvencesi, Şıklığın Adresi</p>

                    <div className="social-icons">
                        {[1, 2, 3,4].map((item) => (
                            <span key={item} className="social-icon checked">✓</span>
                        ))}

                    </div>
                </div>

                {/* Orta Kısım - 3 (Şimdi 4) Kolon */}
                <div className="footer-middle">
                    {/* Sayfalar */}
                    <div className="footer-column">
                        <h3>Sayfalar</h3>
                        <ul>
                            <li><Link to="/about">Hakkımızda</Link></li>
                            <li><Link to="/services">Hizmetlerimiz</Link></li>
                            <li><Link to="/help">Yardım</Link></li>
                            <li><Link to="/contact">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* YENİ KOLON: Ürün Grupları */}
                    <div className="footer-column">
                        <h3>Ürün Gruplarımız</h3>
                        <ul>
                            {productCategories.map(category => ( // productCategories dizisi üzerinde dönüyoruz
                                <li key={category.id}>
                                    {/* Kategori sayfasına yönlendiren Link */}
                                    <Link to={`/kategori/${category.id}`}>
                                        {category.name} {/* Kategori adını gösteriyoruz */}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* İletişim */}
                    <div className="footer-column">
                        <h3>İletişim Bilgileri</h3>
                        <ul>
                            <li>
                                <FiMapPin className="contact-icon" />
                                Kocaeli - İzmit
                            </li>
                            <li>
                                <FiBox className="contact-icon" />
                                Cam Balkon Sistemleri
                            </li>
                            <li>
                                <FiPhone className="contact-icon" />
                                05442464141
                            </li>
                            <li>
                                <a href="https://www.instagram.com/saygincambalkn" target="_blank" rel="noopener noreferrer" className="instagram-link">
                                    <FiInstagram className="contact-icon" />
                                    <span>Instagram</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Bülten */}
                    <div className="footer-column">
                        <h3>Bültenimize Abone Olun</h3>
                        <p>Detaylı bilgi ve teklif almak için bizimle iletişime geçin.</p>

                        <div className="newsletter">
                            <input type="email" placeholder="E-posta adresiniz" />
                            <button>Gönder</button>
                        </div>
                    </div>
                </div>

                {/* Alt Kısım */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Saygın Cam Balkon Türkiye. Tüm Hakları Saklıdır.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;