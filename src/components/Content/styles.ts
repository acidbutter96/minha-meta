import styled from 'styled-components';

export const Container = styled.div`
    grid-area: 'CN';
    
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};

    height: 100vh;
    
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 20px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.primary};
    }

`;