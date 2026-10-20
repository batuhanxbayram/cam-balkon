
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation(); // Mevcut URL yolunu (path) alırız

    useEffect(() => {
        // Her `pathname` değiştiğinde (yani URL değiştiğinde)
        // pencereyi en üste kaydır
        window.scrollTo(0, 0);
    }, [pathname]); // `pathname` bağımlılığı: bu değer değiştiğinde efekti tekrar çalıştır

    return null; // Bu bileşen görsel bir şey render etmez, sadece bir yan etki (side effect) yaratır
}

export default ScrollToTop;