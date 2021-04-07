import React from 'react';
import {
    Container,
    TipBody,
    TipTitle,
    TipButton,
    SvgImg
} from './styles';
import { MdKeyboardArrowRight } from 'react-icons/md';

import TipMesage from '../../components/TipMesage';

import logo from '../../assets/images/vectors/sales.svg';

const Tips: React.FC = () => {
    return (
        <Container>
            <SvgImg src={logo} alt="man hold a big cup of coffee" />
            <TipBody>
                <TipTitle>
                    Só mais um pouco!
                </TipTitle>
                <TipMesage aim={25000} selled={15000} />
                <TipButton>
                    Metas
                    <MdKeyboardArrowRight />
                </TipButton>
            </TipBody>
        </Container>
    )
}

export default Tips;