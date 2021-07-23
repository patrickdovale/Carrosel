/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Card({ Cards, categorySelected}) {

    const filtro = {
        recente: 'Recente',
        antigo: 'Antigo'
    }


    const [controlFilter, setControlFilter] = useState('Recente');

    function ExibirPorCategoria(){
        return categorySelected === 'Todos' ? Cards : Cards.filter(ItemCard =>(ItemCard.Title === categorySelected));
    }

    function ExibirPorOrdenacaoECategoria(){
        return controlFilter === filtro.recente ? ExibirPorCategoria() : [...ExibirPorCategoria()].reverse();
    }


    return (
        <div className="container">
            <div id="cards">
                <div id="organizar-card">
                    <label>Ordenar</label>
                    <select onChange={(e) => setControlFilter(e.target.value)}>
                        <option value={filtro.recente}>{filtro.recente}</option>
                        <option value={filtro.antigo}>{filtro.antigo}</option>
                    </select>
                </div>

                <div id="exibir-cards">
                    { ExibirPorOrdenacaoECategoria().map((card) => (
                        <div className="card">
                            <div className="card-body">
                                <p className="icon-card">{card.Icon}</p>
                                <p className="title-card">{card.Title}</p>
                                <p className="text-card">{card.Text}</p>
                            </div>
                            <div className="card-footer">
                                <p className="price-card">R$ {card.Price}</p>
                                <Link className="info-card" to={`/Saiba-mais/${card.Title}`}>Saiba mais</Link>
                            </div>
                        </div>
                    ))}
                </div>
                

            </div>
        </div>
    )
}

export default Card;