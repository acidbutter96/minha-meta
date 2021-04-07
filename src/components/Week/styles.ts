import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 100%;
    
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 29px;
`;

export const Title = styled.div`
    h3{
        font-weight: 100;
        font-size: 23px;
        font-family: 'Roboto',sans-serif;
    }

    margin: 10px;
    `;

export const ChartContainer = styled.div`
    width: 90%;
    height: 90%;
    
    margin: 10px;
`;