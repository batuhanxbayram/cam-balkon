// src/pages/ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { productCategories } from '../data/products';

// ** BURAYA EKLE: CSS dosyasını import et **
import  "../styles/ProductDetail.css"

const ProductDetailPage = () => {
    const { productId } = useParams();

    let foundProduct = null;
    for (const category of productCategories) {
        foundProduct = category.products.find(product => product.id === productId);
        if (foundProduct) {
            break;
        }
    }

    if (!foundProduct) {
        return <div className="product-not-found">Ürün bulunamadı.</div>; // Ürün bulunamadı mesajına da sınıf ekledim
    }

    return (
        // Ana sayfa konteyneri
        <div className="product-detail-page-container">
            {/* Ürün Başlığı */}
            <span className="page-eyebrow">Ürün detayı</span>
            <h1>{foundProduct.name}</h1>

            {/* İçerik Sarıcı: Fotoğraf ve Bilgi Bölümü */}
            <div className="product-content-wrapper">
                {/* Sol Tarafta Ürün Fotoğrafı */}
                <div className="product-image-section">
                    <img src={foundProduct.imageUrl} alt={foundProduct.name} />
                </div>

                {/* Sağ Tarafta Ürün Açıklaması ve Detayları */}
                <div className="product-info-section">
                    {/* Ürünün kısa açıklaması (product.description) */}
                    <p>{foundProduct.description}</p>

                    {/* Ürünün detaylı bilgileri (product.details) */}
                    {/* Eğer details varsa göster */}
                    {foundProduct.details && (
                        <p className="product-details">{foundProduct.details}</p>
                    )}

                    {/* Daha fazla ürün detayı eklenebilir (fiyat, ölçüler, malzeme vb.) */}
                    {/* <p><strong>Fiyat:</strong> Belirtilmemiş</p> */}
                    {/* <p><strong>Boyutlar:</strong> 2m x 3m</p> */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
