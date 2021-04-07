import React from 'react';
import {
    Container,
    Header,
    Body,
    Item,
    BodyContainer

} from './styles';
import SaleList from '../SaleList';

const SalesBody: React.FC = () => {
    return (
        <Container>
            <Header>
                <Item>
                    Valor da Venda
                </Item>
                <Item>
                    Produtos
                </Item>
                <Item>
                    Cliente
                </Item>
                <Item>
                    Data e Hora
                </Item>
            </Header>
            <BodyContainer>
                <Body>
                    <SaleList
                        amount={200}
                        product=""
                        cliend_id=""
                        datetime=""
                    />
                </Body>
            </BodyContainer>
        </Container>
    )
}

export default SalesBody;