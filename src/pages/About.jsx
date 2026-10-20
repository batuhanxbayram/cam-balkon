import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/About.css"

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="container">
                    <div className="about-intro">
                        <div className="intro-text">
                            <h2>Güvenilir Çözümler, Kaliteli Hizmet</h2>
                            <p>
                                Kocaeli merkezli firmamız, cam balkon sistemleri ve yapı camları konusunda
                                yılların deneyimiyle hizmet vermektedir. Modern teknoloji ve kaliteli
                                malzemeler kullanarak müşterilerimizin yaşam kalitesini artırmayı hedefliyoruz.
                            </p>
                        </div>

                    </div>

                    <div className="about-stats">
                        <div className="stat-item">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Tamamlanan Proje</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Yıllık Deneyim</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Müşteri Memnuniyeti</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">7/24</div>
                            <div className="stat-label">Destek Hizmeti</div>
                        </div>
                    </div>

                    <div className="about-services">
                        <h2>Hizmetlerimiz</h2>
                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-icon">🏗️</div>
                                <h3>Bioklimatik Pergole</h3>
                                <p>Akıllı hava koşullarına uyum sağlayan modern pergole sistemleri</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🏠</div>
                                <h3>Cam Balkon Sistemleri</h3>
                                <p>Katlanır, sürme ve giyotin cam balkon çözümleri</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🌿</div>
                                <h3>Kış Bahçesi</h3>
                                <p>Dört mevsim kullanabileceğiniz yaşam alanları</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🔧</div>
                                <h3>Kapı Sistemleri</h3>
                                <p>Güvenli ve estetik giriş kapısı çözümleri</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">☀️</div>
                                <h3>Cam Tavan</h3>
                                <p>Doğal ışık alan şeffaf tavan sistemleri</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🏢</div>
                                <h3>Metal Pergole</h3>
                                <p>Dayanıklı ve uzun ömürlü metal yapılar</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-values">
                        <h2>Değerlerimiz</h2>
                        <div className="values-content">
                            <div className="value-item">
                                <h3>Kalite</h3>
                                <p>En yüksek kalitede malzeme ve işçilik garantisi sunuyoruz.</p>
                            </div>
                            <div className="value-item">
                                <h3>Güvenilirlik</h3>
                                <p>Sözümüzde duran, zamanında teslim eden güvenilir bir ekibiz.</p>
                            </div>
                            <div className="value-item">
                                <h3>İnovasyon</h3>
                                <p>Teknolojinin sunduğu yenilikleri projelerimize entegre ediyoruz.</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-cta">
                        <div className="cta-content">
                            <h2>Projenizi Birlikte Hayata Geçirelim</h2>
                            <p>
                                Kocaeli ve çevresinde cam balkon, pergole ve yapı camı ihtiyaçlarınız için
                                bizimle iletişime geçin. Ücretsiz keşif ve proje danışmanlığı sunuyoruz.
                            </p>
                            <div className="cta-buttons">
                                <Link to="/contact" className="btn-primary">İletişime Geçin</Link>
                                <Link to="/" className="btn-secondary">Ürünleri İnceleyin</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
