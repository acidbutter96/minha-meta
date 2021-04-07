import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import NumberString from 'number-string';
import {
    Container,
    ListButton,
    Amount,
    Date
} from './styles';

interface ISaleItem {
    percent: number;
    date: string;
    amount: number;
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

const SaleItem: React.FC<ISaleItem> = ({ percent, date, amount }) => {
    let color: string;

    if (percent < 0) {
        color = '.danger';
    } else {
        color = '.success';
    }

    return (
        <Container>
            <ListButton>
                {percent < 0 ? '-' : ''} {percent * 100} %
                <MdKeyboardArrowUp className="react-icons" />
            </ListButton>
            <Amount>
                {moneyFormat(108080.2)}
            </Amount>
            <Date>
                12/03/2020
            </Date>
        </Container>
    );
}

export default SaleItem;