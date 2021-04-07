import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: 100%;

    background-color: ${props => props.theme.colors.secondary};
    border-radius: 23px 23px 0px 0px;
`;

export const Header = styled.div`
    position: relative;
    top: 0;
    z-index: 0;

    display: flex;
    justify-content: space-around;

    background-color: ${props => props.theme.colors.grey2};
    border-radius: 23px 23px 0 0;

    padding: 20px;
    `;
export const SearchProduct = styled.input`

    margin: 7px;

    padding: 10px;

    border-radius: 13px;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};

    &[type="text"]{
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.primary};
    }
    `;
export const ClientCode = styled.input`
    margin: 7px;

    padding: 10px;

    border-radius: 13px;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};

    &[type="text"]{
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.primary};
    }
    `;

export const Button = styled.button`
    margin: 7px;
    
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    font-size: 23px;
    color: ${props => props.theme.colors.white};

    background-color: ${props => props.theme.colors.primary};
    border-radius: 100px;
    border: 0px;

    transition: all.7s;

    &:hover{
        background-color: ${props => props.theme.colors.secondary}
    }
    `;
export const SalesBody = styled.div`
    background-color:${props => props.theme.colors.success}
    `;