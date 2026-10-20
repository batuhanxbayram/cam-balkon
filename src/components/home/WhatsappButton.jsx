import React from 'react';
import "../../styles/WhatsappButton.css"
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp ikonu için react-icons kullanacağız

const WhatsAppButton = () => {
    // Kendi telefon numaranızı buraya girin (ülke koduyla birlikte, başında + veya 00 olmadan)
    // Bu değişken artık kullanılacak!
    const phoneNumber = '905442464141'; // Buraya kendi numaranızı girin (905462532064 gibi)

    // Otomatik gönderilecek mesaj
    // Bu değişken de artık kullanılacak ve daha okunaklı olacak
    const autoMessage = encodeURIComponent('Detaylı Bilgi Alabilir Miyim ?');

    // WhatsApp API URL'si - phoneNumber ve autoMessage değişkenleri kullanılıyor
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${autoMessage}`;

    return (
        <a
            href={whatsappUrl}
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp üzerinden bize ulaşın"
        >
            <FaWhatsapp className="whatsapp-icon" />
            <span className="whatsapp-text">Bize Ulaşın</span>
        </a>
    );
};

export default WhatsAppButton;