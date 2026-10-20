// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { productCategories } from "../../data/products.js";
// Slider importları tekrar eden satırlardan birini kaldırabilirsiniz, aynı bileşeni iki kez import etmeye gerek yok.
// import Slider from '../home/HomeSlider.jsx'; // Bu satırı kaldırabilirsiniz
import HomeSlider from "../home/HomeSlider.jsx"; // Varsayılan slider bileşeni

// ** BURAYA EKLE: CSS dosyasını import et **
import "../../styles/HomePage.css";

const HomePage = () => {
    return (
        // ** BURAYA EKLE: Ana div'e sınıf ataması **
        <div className="home-page-container">
            <HomeSlider />

            <section className="product-categories-section">
                {/* ** BURAYA EKLE: H2 başlığına sınıf ataması ** */}
                <div className="section-heading-group">
                    <span className="eyebrow">Yaşam alanınız için</span>
                    <h2 className="section-title">Ürün Kategorileri</h2>
                    <p>Estetik, konfor ve dayanıklılığı bir araya getiren çözümlerimizi inceleyin.</p>
                </div>
                <div className="category-list">
                    {productCategories.map(category => (
                        <div key={category.id} className="category-card">
                            <Link to={`/kategori/${category.id}`}>
                                {/* Görselin sarmalayıcı div'ine gerek kalmadı, direk img'e stil vereceğiz */}
                                <img src={category.imageUrl} alt={category.name} />
                                <div className="category-card-content">
                                    <h3>{category.name}</h3>
                                    <p>{category.description}</p>
                                    <span className="card-link">Detayları incele <span aria-hidden="true">→</span></span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Diğer ana sayfa içerikleri */}
        </div>
    );
};

export default HomePage;
