import styled from 'styled-components';

export const Container = styled.main`
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas: 
    'TW'
    'BW';
`;

export const TopWidgets = styled.div`
        grid-area: 'TW';
        
        display: grid;
        grid-template-columns: calc(100% - 300px) auto;
        grid-template-rows: auto 20%;
        grid-template-areas: 'SP UP';

        width: 100%;

    `;
export const SalesPanel = styled.div`
        grid-area: 'SP';

        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: calc(100% - 60px) auto;
        grid-template-areas: 
        'ST TP';

        padding: 30px 0px 0px 20px;

        height: 100%;

        font-family: 'Roboto';

        h1{
            font-weight: 100;
            font-size: 23px;
        }
    `;

export const SaleTitle = styled.div`
    grid-area: 'ST';
    height: 100%;
    `;

export const Sales = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 20px;

    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar{
        width: 0px;
    }
    
    height: 400px;
    width: 100%;
    `;

export const Update = styled.div`
        grid-area: 'UP';
    `;
export const BttmWidgets = styled.div`
        grid-area: 'BW';

        display: grid;
        grid-template-columns: calc(43vw - 200px) auto;
        grid-template-rows: calc(100vh - 48vh) auto;
        grid-template-areas: 'WS CS';

        
    `;

export const WeekScore = styled.div`
    background-color: ${props => props.theme.colors.quaternary};
`;
export const CreateSale = styled.div`
    background-color: ${props => props.theme.colors.tertiary};
`