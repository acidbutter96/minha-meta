import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 70px !important;
    width: 100%;

    >.money{
        font-weight: 800;
    }
    
    &:hover{
        background-color: ${props => props.theme.colors.primary};
        border-bottom: 1px solid ${props => props.theme.colors.secondary};
    }

    border-bottom: 1px solid ${props => props.theme.colors.secondary};
`;

export const Item = styled.div`
    width: 100px;

    font-family: 'Roboto',sans-serif;
    font-size: 12px;
    font-weight: 100;
`