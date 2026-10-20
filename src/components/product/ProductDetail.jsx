import { useParams } from 'react-router-dom';
import '../../styles/ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();

    // Burada API'den veya veri dosyasından ürün detaylarını çekebilirsiniz
    const product = {
        1: { title: "Lüks Cam Balkon", description: "Detaylarr..." },
        // Diğer ürünler...
    }[id];

    return (
        <div className="product-detail-container">
            <h1>{product?.title || 'Ürün Bulunamadı'}</h1>
            <p>{product?.description || 'Ürün detayı yüklenemedi'}</p>
            <div className="product-images">
                {/* Ürün resimleri buraya */}
            </div>
            {/*<Link to="/" className="back-button">Geri Dön</Link>*/}
        </div>
    );
};

export default ProductDetail;