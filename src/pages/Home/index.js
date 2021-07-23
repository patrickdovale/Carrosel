import React, { useState } from 'react';

import Carrosel from '../../components/carrossel';
import Category from '../../components/category';
import Card from '../../components/card';

function Home({CarroselItems,Categorys,Cards}){

    const [categorySelected,setCategorySelected] = useState('Todos')

    return(
        <div>
            <Carrosel CarroselItems={CarroselItems}/>
            <Category Categorys={Categorys} setCategorySelected={setCategorySelected} categorySelected={categorySelected}/>
            <Card Cards={Cards} categorySelected={categorySelected}/>
        </div>
    )
}

export default Home;