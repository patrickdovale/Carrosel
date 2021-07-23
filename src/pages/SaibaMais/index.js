import React from 'react';
import Carrosel from '../../components/carrossel';
import { Link, useParams } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

function SaibaMais({ CarroselItems }) {

    const { Item } = useParams();
    const ImageSlide = "https://ebusinessconsultoria.com.br/assets//Uploads/posts-avulsosSistemas-Operacionais.png";

    return (
        <>
            <Carrosel CarroselItems={CarroselItems} />
            <div className="container">
                <div id="info-plus">

                    <Link to="/" className="button-return">
                        <IoIosArrowBack />
                        <p>{Item}</p>
                    </Link>

                    <div className="section-slide-image">
                        <HiOutlineArrowLeft className="icon-control-slider-info" />
                        <div className="section-image-info">
                            <img src={ImageSlide} alt="imagem do slide" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet lorem iaculis,
                                aliquet odio vitae, cursus ante. Ut diam lorem, blandit mattis rutrum in, sodales
                                sodales turpis.</p>
                        </div>

                        <div className="section-image-info">
                            <img src={ImageSlide} alt="imagem do slide" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet lorem iaculis,
                                aliquet odio vitae, cursus ante. Ut diam lorem, blandit mattis rutrum in, sodales
                                sodales turpis.</p>
                        </div>

                        <HiOutlineArrowRight className="icon-control-slider-info" />
                    </div>

                    <div className="text-info-plus">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet lorem iaculis,
                            aliquet odio vitae, cursus ante. Ut diam lorem, blandit mattis rutrum in, sodales
                            sodales turpis. Suspendisse potenti. Nam arcu enim, venenatis et felis semper,
                            vulputate luctus diam. Praesent ex est, efficitur vel neque et, fermentum efficitur felis.
                            Phasellus quis lacinia dui, id molestie ligula. Class aptent taciti sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos.
                        </p>

                        <p>
                            Sed porttitor tellus eget condimentum semper. Quisque facilisis tincidunt enim eu ultricies.
                            Vivamus quis velit nec ante aliquet eleifend in at augue. Proin finibus a nibh sit amet gravida.
                            Fusce pellentesque augue ultrices urna tempor, vitae rhoncus nibh ultricies. Proin aliquam
                            suscipit tristique. Vestibulum vestibulum velit eros, sed cursus erat consectetur tincidunt.
                        </p>
                    </div>

                    <div className="section-info-footer">
                        <div className="section-price">
                            <span className="cifrao">R$</span>
                            <h3 className="price-slider">40,00</h3>
                        </div>
                        <span className="button-style">Habilitar</span>
                    </div>


                </div>
            </div>
        </>
    )
}

export default SaibaMais;