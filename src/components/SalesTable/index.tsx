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
                    <SearchProduct
                        type="text"
                        name="product"
                        placeholder="Nome ou código do produto"
                    />
                    <ClientCode
                        type="text"
                        name="client_id"
                        placeholder="Código do cliente"
                    />
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