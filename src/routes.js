import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SaibaMais from './pages/SaibaMais';

import { FaPiggyBank, FaTree, FaSuitcase } from 'react-icons/fa';
import { RiVipDiamondLine } from 'react-icons/ri';
import { BiWorld, BiBlock } from 'react-icons/bi';
import { ImHammer2 } from 'react-icons/im';
import { AiFillBank } from 'react-icons/ai';
import { RiGlobalLine } from 'react-icons/ri';
import { GiPerson } from 'react-icons/gi';

function Routes() {

    const Date = [
        {
            Title: 'Todos',
            Icon: <RiGlobalLine />,
            Text: '',
            Price: ''

        },
        {
            Title: 'Profissional',
            Icon: <FaSuitcase />,
            Text: '',
            Price: "29,99"

        },
        {
            Title: 'Reguladores',
            Icon: <AiFillBank />,
            Text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresa S.A., de capital aberto e limitados (LTDA) de grande porte.',
            Price: "29,99"

        },
        {
            Title: 'Sócio Ambiental',
            Icon: <FaTree />,
            Text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresa S.A., de capital aberto e limitados (LTDA) de grande porte.',
            Price: "29,99"

        },
        {
            Title: 'Jurídico',
            Icon: <ImHammer2 />,
            Text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresa S.A., de capital aberto e limitados (LTDA) de grande porte.',
            Price: "29,99"

        },
        {
            Title: 'Listas Restritivas',
            Icon: <BiBlock />,
            Text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresa S.A., de capital aberto e limitados (LTDA) de grande porte.',
            Price: "29,99"

        },
        {
            Title: 'Mídia / Internet',
            Icon: <BiWorld />,
            Text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresa S.A., de capital aberto e limitados (LTDA) de grande porte.',
            Price: "29,99"

        },
        {
            Title: 'Bens e Imóveis',
            Icon: <RiVipDiamondLine />,
            Text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresa S.A., de capital aberto e limitados (LTDA) de grande porte.',
            Price: "29,99"

        },
        {
            Title: 'Cadastro',
            Icon: <GiPerson />,
            Text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresa S.A., de capital aberto e limitados (LTDA) de grande porte.',
            Price: "29,99"

        },
        {
            Title: 'Financeiro',
            Icon: <FaPiggyBank />,
            Text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresa S.A., de capital aberto e limitados (LTDA) de grande porte.',
            Price: "29,99"

        },
        {
            Title: 'Financeiro',
            Icon: <FaPiggyBank />,
            Text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresa S.A., de capital aberto e limitados (LTDA) de grande porte.',
            Price: "29,99"

        },
        {
            Title: 'Sócio Ambiental',
            Icon: <FaTree />,
            Text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresa S.A., de capital aberto e limitados (LTDA) de grande porte.',
            Price: "29,99"

        },
        {
            Title: 'Jurídico',
            Icon: <ImHammer2 />,
            Text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresa S.A., de capital aberto e limitados (LTDA) de grande porte.',
            Price: "29,99"

        },
    ]

    const DatenotDuplicate = new Map();
    Date.forEach((item) => {
        if (!DatenotDuplicate.has(Date.Title)) {
            DatenotDuplicate.set(item.Title, item)
        }
    })
    const DateTreated = [...DatenotDuplicate.values()]

    const Categorys = DateTreated;
    const CarroselItems = DateTreated.slice(2);
    const Cards = Date.slice(1);

    console.log(Categorys);
    console.log(CarroselItems);
    console.log(Cards);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={(props) =><Home {...props} CarroselItems={CarroselItems} Categorys={Categorys} Cards={Cards}/>} exact />
                <Route path="/Saiba-mais/:Item" component={(props) => <SaibaMais CarroselItems={CarroselItems}/>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;