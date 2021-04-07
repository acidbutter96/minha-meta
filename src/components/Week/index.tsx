import React from 'react';
import {
    Container,
    Title,
    ChartContainer

} from './styles';
const Week: React.FC = () => {
    return (
        <Container>
            <Title>
                <h3>
                    Desempenho Semanal
                </h3>
            </Title>
            <ChartContainer>

            </ChartContainer>
        </Container>
    );
}

export default Week;