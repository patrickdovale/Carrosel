import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


function Carrosel({ CarroselItems }) {

    const img = 'https://blog.longa.com.br/wp-content/uploads/2018/05/195304-veja-como-investir-no-seu-crescimento-organico-empresarial-780x450.jpg';

    return (
        <div id="background-carousel">
            <Carousel
                autoPlay
                infiniteLoop
                showArrows={false}
                showStatus={false}
                showThumbs={false}
            >
                {CarroselItems.map((Item) => (
                    <div className="slider-section">
                        <div className="section-information">
                            <div className="section-information-header">
                                <h1 className="logo">LOGO</h1>
                                <span>|</span>
                                <h3 className="title-slider">{Item.Title}</h3>
                            </div>

                            <div className="section-information-text">
                                <p>{Item.Text}</p>
                            </div>

                            <div className="section-information-footer">
                                <div className="section-price">
                                    <span className="cifrao">R$</span>
                                    <h3 className="price-slider">{Item.Price}</h3>
                                </div>
                                <Link className="button-style" to={`/Saiba-mais/${Item.Title}`}>Saiba mais</Link>
                            </div>
                        </div>
                        <div className="section-image">
                            <img src={img} alt="imagem empresa" />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Carrosel;