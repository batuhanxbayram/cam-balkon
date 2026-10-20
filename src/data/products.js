// src/data/products.js

// Kategori resimlerinin yolu için yardımcı fonksiyon
const getCategoryImageUrl = (categoryId) => {
    // Her kategorinin ana tanıtım görselinin 'main.jpg' olduğunu varsayıyoruz
    return `/images/${categoryId}/main.jpg`;
};

// Ürün resimlerinin yolu için yardımcı fonksiyon
const getProductImageUrl = (categoryId, productNumber) => {
    // Ürün resimlerinin 'product_X.jpg' şeklinde olduğunu varsayıyoruz
    return `/images/${categoryId}/product_${productNumber}.jpg`;
};

// Ürün listelerini otomatik oluşturan yardımcı fonksiyon
const generateProducts = (categoryId, count) => {
    const products = [];
    const readableCategoryName = categoryId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    for (let i = 1; i <= count; i++) {
        products.push({
            id: `${categoryId}-${i}`,
            name: `${readableCategoryName} Model ${i}`,
            description: `Konfor ve estetiği birleştiren ${readableCategoryName} kategorisinden Model ${i}.`,
            imageUrl: getProductImageUrl(categoryId, i),
            details: `Bu ${readableCategoryName} Model ${i} ürünü, üstün özellikleri ve modern tasarımıyla öne çıkar. Kullanım kolaylığı ve uzun ömürlü yapısıyla ideal bir çözümdür.`
        });
    }
    return products;
};

export const productCategories = [
    {
        id: 'bioklimatik-pergole',
        name: 'Bioklimatik Pergole',
        description: 'Akıllı lamelli sistemi ile dört mevsim iklim kontrolü ve modern tasarım.',
        imageUrl: getCategoryImageUrl('bioklimatik-pergole'),
        products: generateProducts('bioklimatik-pergole', 8) // 8 fotoğraf
    },
    {
        id: 'cam-tavan',
        name: 'Cam Tavan',
        description: 'Dört mevsim dış mekan keyfi için modern ve dayanıklı cam tavan çözümleri.',
        imageUrl: getCategoryImageUrl('cam-tavan'),
        products: generateProducts('cam-tavan', 13) // 13 fotoğraf
    },
    {
        id: 'giyotin-cam',
        name: 'Giyotin Cam',
        description: 'Modern ve otomatik dikey hareketli cam sistemleri. Güvenlik ve estetiği birleştirir.',
        imageUrl: getCategoryImageUrl('giyotin-cam'),
        products: generateProducts('giyotin-cam', 8) // 8 fotoğraf
    },
    {
        id: 'isicamli-sistemler',
        name: 'Isıcamlı Sistemler',
        description: 'Daha yüksek ısı ve ses yalıtımı sağlayan özel cam sistemleri.',
        imageUrl: getCategoryImageUrl('isicamli-sistemler'),
        products: generateProducts('isicamli-sistemler', 11) // 11 fotoğraf
    },
    {
        id: 'kapi-sistemleri',
        name: 'Kapı Sistemleri',
        description: 'Estetik ve güvenliği bir arada sunan modern kapı çözümleri.',
        imageUrl: getCategoryImageUrl('kapi-sistemleri'),
        products: generateProducts('kapi-sistemleri', 17) // 17 fotoğraf
    },
    {
        id: 'katlanir-cambalkon',
        name: 'Katlanır Cambalkon',
        description: 'Balkonlarınızı dört mevsim kullanılabilir hale getirir. Estetik ve pratik çözümler sunarız.',
        imageUrl: getCategoryImageUrl('katlanir-cambalkon'),
        products: generateProducts('katlanir-cambalkon', 5) // 5 fotoğraf
    },
    {
        id: 'kis-bahcesi',
        name: 'Kış Bahçesi',
        description: 'Kış aylarında konforlu ve ferah bir yaşam alanı sunar. Modern tasarımlar ve yüksek yalıtım seçenekleri.',
        imageUrl: getCategoryImageUrl('kis-bahcesi'),
        products: generateProducts('kis-bahcesi', 7) // 7 fotoğraf
    },
    {
        id: 'kumandali-pergole',
        name: 'Kumandalı Pergole',
        description: 'Uzaktan kumanda ile kontrol edilebilen, modern ve fonksiyonel pergoleler.',
        imageUrl: getCategoryImageUrl('kumandali-pergole'),
        products: generateProducts('kumandali-pergole', 8) // 8 fotoğraf
    },
    {
        id: 'metal-pergole',
        name: 'Metal Pergole',
        description: 'Dayanıklı ve modern tasarımlı metal pergole çözümleri.',
        imageUrl: getCategoryImageUrl('metal-pergole'),
        products: generateProducts('metal-pergole', 10) // 10 fotoğraf
    },
    {
        id: 'surme-cambalkon',
        name: 'Sürme Cambalkon',
        description: 'Geniş açıklıklar için ideal, pürüzsüz kayar sistemli cam balkonlar.',
        imageUrl: getCategoryImageUrl('surme-cambalkon'),
        products: generateProducts('surme-cambalkon', 9) // 9 fotoğraf
    },
];