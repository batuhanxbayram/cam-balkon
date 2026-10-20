import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "../../styles/HomeSlider.css";

const HomeSlider = () => {
    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const handleClick = (e) => {
        const sliderWidth = e.currentTarget.offsetWidth;
        const clickX = e.nativeEvent.offsetX;

        if (clickX < sliderWidth / 2) {
            sliderRef.current.slickPrev();
        } else {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div className="slider-wrapper" onClick={handleClick}>
            <Slider ref={sliderRef} {...settings}>

                <div className="slider-item">
                    <img
                        src="/images/balkon4.jpg"
                        alt="Sürme Cambalkon"
                        className="slider-image"
                    />
                    <div className="slider-text">
                        <h2>Sürme Cambalkon</h2>
                        <p>Klasik ve güvenilir balkon sistemleri</p>
                        <Link to="/kategori/surme-cambalkon">Keşfedin <span aria-hidden="true">→</span></Link>
                    </div>
                </div>




                <div className="slider-item">
                    <img
                        src="/images/bioklimatik-pergole/main.jpg"
                        alt="Bioklimatik Pergole"
                        className="slider-image"
                    />
                    <div className="slider-text">
                        <h2>Bioklimatik Pergole</h2>
                        <p>Modern, estetik ve akıllı çözümler</p>
                        <Link to="/kategori/bioklimatik-pergole">Keşfedin <span aria-hidden="true">→</span></Link>
                    </div>
                </div>

                {/* Diğer sliderlar (görsel + metinli) */}
                <div className="slider-item">
                    <img
                        src="/images/cam-tavan/main.jpg"
                        alt="Cam Tavan"
                        className="slider-image"
                    />
                    <div className="slider-text">
                        <h2>Cam Tavan</h2>
                        <p>Şeffaf ve aydınlık yaşam alanları</p>
                        <Link to="/kategori/cam-tavan">Keşfedin <span aria-hidden="true">→</span></Link>
                    </div>
                </div>


                {/* Eklenen kategoriler */}
                <div className="slider-item">
                    <img
                        src="/images/giyotin-cam/main.jpg"
                        alt="Giyotin Cam"
                        className="slider-image"
                    />
                    <div className="slider-text">
                        <h2>Giyotin Cam</h2>
                        <p>Pratik ve fonksiyonel cam sistemleri</p>
                    </div>
                </div>

                <div className="slider-item">
                    <img
                        src="/images/isicamli-sistemler/main.jpg"
                        alt="Isıcamlı Sistemler"
                        className="slider-image"
                    />
                    <div className="slider-text">
                        <h2>Isıcamlı Sistemler</h2>
                        <p>Enerji verimli yalıtım çözümleri</p>
                    </div>
                </div>

                <div className="slider-item">
                    <img
                        src="/images/kapi-sistemleri/main.jpg"
                        alt="Kapı Sistemleri"
                        className="slider-image"
                    />
                    <div className="slider-text">
                        <h2>Kapı Sistemleri</h2>
                        <p>Güvenli ve şık giriş çözümleri</p>
                    </div>
                </div>

                <div className="slider-item">
                    <img
                        src="/images/katlanir-cambalkon/main.jpg"
                        alt="Katlanır Cambalkon"
                        className="slider-image"
                    />
                    <div className="slider-text">
                        <h2>Katlanır Cambalkon</h2>
                        <p>Esnek balkon kapatma sistemleri</p>
                    </div>
                </div>

                <div className="slider-item">
                    <img
                        src="/images/kis-bahcesi/main.jpg"
                        alt="Kış Bahçesi"
                        className="slider-image"
                    />
                    <div className="slider-text">
                        <h2>Kış Bahçesi</h2>
                        <p>Dört mevsim yeşillik ve konfor</p>
                    </div>
                </div>

                <div className="slider-item">
                    <img
                        src="/images/kumandali-pergole/main.jpg"
                        alt="Kumandalı Pergole"
                        className="slider-image"
                    />
                    <div className="slider-text">
                        <h2>Kumandalı Pergole</h2>
                        <p>Akıllı kontrol sistemleri</p>
                    </div>
                </div>

                <div className="slider-item">
                    <img
                        src="/images/metal-pergole/main.jpg"
                        alt="Metal Pergole"
                        className="slider-image"
                    />
                    <div className="slider-text">
                        <h2>Metal Pergole</h2>
                        <p>Dayanıklı ve şık metal yapılar</p>
                    </div>
                </div>



            </Slider>
        </div>
    );
};

export default HomeSlider;
