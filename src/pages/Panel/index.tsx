import React, { useMemo } from 'react';
import {
    Container,
    TopWidgets,
    SalesPanel,
    SaleTitle,
    Sales,
    Updates,
    BttmWidgets,
    WeekScore,
    CreateSale,
} from './styles';
import SaleItem from '../../components/SaleItem';
import Tips from '../../components/Tips';

import logo from '../../assets/images/vectors/sales.svg';

interface IRouteParams {
    match: {
        params: {
            mode: string;
        }
    }
}

const Panel: React.FC<IRouteParams> = ({ match }) => {
    const { mode } = match.params;
    const memo = useMemo(() => {
        return mode === 'goals' ? {
            title: 'Meta Mensal'
        } : {
            title: 'Painel do Vendedor'
        };
    }, [mode]);

    const salesData = [
        {
            percent: -.25,
            date: '2021-04-01',
            amount: 15000
        },
        {
            percent: -.25,
            date: '2021-04-01',
            amount: 15000
        },
        {
            percent: -.25,
            date: '2021-04-01',
            amount: 15000
        },
        {
            percent: -.25,
            date: '2021-04-01',
            amount: 15000
        },
        {
            percent: -.25,
            date: '2021-04-01',
            amount: 15000
        },
    ];

    return (
        <Container>
            <TopWidgets>
                <SalesPanel>
                    <SaleTitle>
                        <h1>Painel do Vendedor</h1>
                        <Sales>
                            <SaleItem
                                percent={.2}
                                date="16-12-2991"
                                amount={12762}
                            >
                            </SaleItem>
                            <SaleItem
                                percent={.2}
                                date="16-12-2991"
                                amount={12762}
                            >
                            </SaleItem>
                            <SaleItem
                                percent={.2}
                                date="16-12-2991"
                                amount={12762}
                            >
                            </SaleItem>
                            <SaleItem
                                percent={.2}
                                date="16-12-2991"
                                amount={12762}
                            >
                            </SaleItem>
                            <SaleItem
                                percent={.2}
                                date="16-12-2991"
                                amount={12762}
                            >
                            </SaleItem>
                            <SaleItem
                                percent={.2}
                                date="16-12-2991"
                                amount={12762}
                            >
                            </SaleItem>
                            <SaleItem
                                percent={.2}
                                date="16-12-2991"
                                amount={12762}
                            >
                            </SaleItem>
                            <SaleItem
                                percent={.2}
                                date="16-12-2991"
                                amount={12762}
                            >
                            </SaleItem>

                        </Sales>
                    </SaleTitle>
                    <Tips></Tips>
                </SalesPanel>
                <Updates>
                    oi
                </Updates>
            </TopWidgets>
            <BttmWidgets>
                <WeekScore>
                    week
                </WeekScore>
                <CreateSale>
                    create
                </CreateSale>
            </BttmWidgets>
        </Container>
    )
};

export default Panel;