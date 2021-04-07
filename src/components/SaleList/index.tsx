import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import NumberString from 'number-string';
import {
    Container,
    Item,
} from './styles';

interface ISaleList {
    amount: number;
    product: string;
    cliend_id: string;
    datetime: string;
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

const SaleList: React.FC<ISaleList> = ({ amount, product, cliend_id, datetime }) => {

    return (
        <Container>
            <Item className="money">
                {moneyFormat(amount)}
            </Item>
            <Item>
                {product}
            </Item>
            <Item>
                {cliend_id}
            </Item>
            <Item>
                {datetime}
            </Item>
        </Container>
    );
}

export default SaleList;