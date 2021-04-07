import React from 'react';
import {
    Container,
    Header,
    SearchProduct,
    ClientCode,
    Button


} from './styles';
import { MdAddShoppingCart, MdSettings } from 'react-icons/md';

import SalesBody from '../SalesBody';

const SalesTable: React.FC = () => {
    return (
        <Container>
            <Header>
                <div>
                    <SearchProduct></SearchProduct>
                    <ClientCode></ClientCode>
                </div>
                <Button>
                    <MdAddShoppingCart />
                </Button>
                <Button>
                    <MdSettings />
                </Button>
            </Header>
            <SalesBody>

            </SalesBody>
        </Container>
    )
}

export default SalesTable;