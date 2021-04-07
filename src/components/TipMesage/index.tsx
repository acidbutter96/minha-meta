import React from 'react';
import NumberString from 'number-string';

import {
    Container
} from './styles';

interface ITipMesage {
    aim: number;
    selled: number;
}

const moneyFormat = (val: number) => (NumberString.toMoney(val, {
    decimalMark: ",",
    thousandSeperator: ".",
    maxPrecision: 2,
    minPrecision: 2,
    symbol: "R$",
    symbolBehind: false,
    useParens: true,
}));


const TipMesage: React.FC<ITipMesage> = ({ aim, selled }) => {
    return (
        <Container>
            Você está a <span className="aim">{moneyFormat(aim - selled)}</span> da meta diária para sua meta mensal de <span className="goal">{moneyFormat(selled)}</span>
        </Container>);
}

export default TipMesage;