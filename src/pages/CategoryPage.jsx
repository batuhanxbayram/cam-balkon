    // src/pages/CategoryPage.js
    import React from 'react';
    import { useParams, Link } from 'react-router-dom';
    import { productCategories } from '../data/products';

    // ** BURAYA EKLE: CSS dosyasını import et **
    import "../styles/CategoryPage.css"

    const CategoryPage = () => {
        const { categoryId } = useParams();
        const category = productCategories.find(cat => cat.id === categoryId);

        if (!category) {
            return <div>Kategori bulunamadı.</div>;
        }

        return (


            // ** BURAYA EKLE: Ana div'e sınıf ataması **
            <div className="category-detail-page">

                {/* ** BURAYA EKLE: Başlığa sınıf ataması ** */}
                <span className="page-eyebrow">Ürün grubu</span>
                {<h1>{category.name}</h1>}
                {/* ** BURAYA EKLE: Açıklamaya sınıf ataması ** */}
                <p>{category.description}</p>



                {/* ** BURAYA EKLE: Ürün listesi div'ine sınıf ataması (zaten varmış ama kontrol edin) ** */}
                <div className="product-list">
                    {category.products.map(product => (
                        // ** BURAYA EKLE: Ürün kartına sınıf ataması (zaten varmış ama kontrol edin) **
                        <div key={product.id} className="product-card">
                            <Link to={`/urun/${product.id}`}> {/* Ürün detay sayfasına yönlendirme */}
                                {/* ** BURAYA EKLE: Ürün görseline sınıf ataması ** */}
                                <img src={product.imageUrl} alt={product.name} />
                                {/* ** BURAYA EKLE: Ürün başlığına sınıf ataması ** */}
                                <h3>{product.name}</h3>
                                {/* ** BURAYA EKLE: Ürün açıklamasına sınıf ataması ** */}
                                <p>{product.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    export default CategoryPage;
