import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
    height: 100%;
    top: -16px;
    position: relative;

    padding: 10px;

    background-color: ${props => props.theme.colors.secondary};
    border-radius: 23px 23px 0px 0px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: auto;
    height: 50px;

    position: relative;
    top: -10px;

    
    border-radius: 23px 23px 0 0;
    border-bottom: 1px solid ${props => props.theme.colors.primary}
    `;
export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    `;

export const Item = styled.div`
    width: 100px;

    font-family: 'Roboto',sans-serif;
    font-size: 12px;
    font-weight: 100;
`

export const BodyContainer = styled.div`
    height: 300px;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 0px;
    }
`;