// src/pages/ContactPage.js
import React from 'react';
import "../styles/ContactPage.css"
import { FiPhone, FiMail, FiMapPin, FiInstagram } from 'react-icons/fi';

const ContactPage = () => {
    // Kendi iletişim bilgileriniz
    const phoneNumber = '05442464141'; // Telefon numaranız
    const emailAddress = 'sayginyapi@hotmail.com'; // E-posta adresiniz
    const address = 'Kocaeli-İzmit'; // Adresiniz
    const instagramUrl = 'https://www.instagram.com/saygincambalkn'; // Instagram adresiniz
    const whatsappNumber = '905442464141'; // WhatsApp numaranız (ülke koduyla, başında + olmadan)
    const whatsappMessage = encodeURIComponent('Merhaba, web sitenizden ulaşıyorum. Bilgi alabilir miyim ? .'); // WhatsApp ön mesajı

    // Google Haritalar embed URL'si
    // Kendi adresinizin enlem ve boylamını buradan alabilirsiniz: https://www.google.com/maps/search/?api=1&query=Your+Address
    // Veya direkt embed kodu için Google Maps'ten konumunuzu aratıp 'Paylaş' -> 'Harita yerleştir' kısmını kullanabilirsiniz.
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.598504005072!2d28.857640315364177!3d40.99266197930467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbd2d4d2d4d3%3A0x6b8d9e2a7b8a7a8d!2sEge%20Sk.%20No%3A5%2C%20G%C3%BCng%C3%B6ren%2C%2034160%20G%C3%BCng%C3%B6ren%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1678912345678!5m2!1str!2str";


    return (
        <div className="contact-page-container">
            <h1 className="contact-title">Bize Ulaşın</h1>
            <div className="contact-content-wrapper">
                {/* Sol Kolon: İletişim Bilgileri */}
                <div className="contact-info-section">
                    <h2 className="section-heading">İletişim Bilgileri</h2>
                    <ul className="contact-list">
                        <li>
                            <FiPhone className="contact-icon" />
                            <span>Telefon: <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>{phoneNumber}</a></span>
                        </li>
                        <li>
                            <FiMail className="contact-icon" />
                            <span>E-posta: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></span>
                        </li>
                        <li>
                            <FiMapPin className="contact-icon" />
                            <span>Adres: {address}</span>
                        </li>
                        <li className="social-link">
                            <FiInstagram className="contact-icon" />
                            <span>Instagram: <a href={instagramUrl} target="_blank" rel="noopener noreferrer">@saygincambalkn</a></span>
                        </li>
                        <li className="social-link">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="WhatsApp" className="whatsapp-small-icon" />
                            <span>WhatsApp: <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">{whatsappNumber}</a></span>
                        </li>
                    </ul>

                </div>

                {/* Sağ Kolon: Harita */}
                <div className="map-section">
                    <h2 className="section-heading">Konumumuz</h2>
                    <div className="map-embed-container">
                        <iframe
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Konumumuz"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;