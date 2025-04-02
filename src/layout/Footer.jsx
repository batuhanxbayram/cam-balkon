// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

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

                {/* Orta Kısım - 3 Kolon */}
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

                    {/* İletişim */}
                    <div className="footer-column">
                        <h3>İletişim Bilgileri</h3>
                        <ul>
                            <li className="checked">✓ Ege Sokak, 5B Güngören, İstanbul</li>
                            <li className="checked">✓ Cam Balkon Sistemleri</li>
                            <li>□ 0543 848 85 59</li>
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

            </div>
        </footer>
    );
};

export default Footer;