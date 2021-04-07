import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 500px;

`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 470px;
    margin-right: 10px;
    
    background-color: ${props => props.theme.colors.secondary};

    border-radius: 0 0 23px 23px;
`;

export const Title = styled.div`
    display: flex;
    width: 100%;
    margin-left: 40px;
    margin-top: 10px;
    margin-bottom: 10px;

    >h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
    }
    
`;
export const List = styled.div`
    background-color: red;
    width: 90%;
    height: 80%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    overflow-x: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 0;
    }
`;