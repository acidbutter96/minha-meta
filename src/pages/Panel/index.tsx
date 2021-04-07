import React, { useMemo } from 'react';
import {
    Container,
    TopWidgets,
    SalesPanel,
    SaleTitle,
    Sales,
    Update,
    BttmWidgets,
    WeekScore,
    CreateSale,
} from './styles';
import SaleItem from '../../components/SaleItem';
import Tips from '../../components/Tips';
import Updates from '../../components/Updates';

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
            percent: .25,
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
                            {salesData.map((item) => <SaleItem
                                percent={item.percent}
                                date={item.date}
                                amount={item.amount}
                            ></SaleItem>)}
                        </Sales>
                    </SaleTitle>
                    <Tips></Tips>
                </SalesPanel>
                <Update>
                    <Updates>
                        oi
                    </Updates>
                </Update>
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