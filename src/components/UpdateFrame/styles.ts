import styled from 'styled-components';

export const Content = styled.a`
    display: flex;
    text-decoration: none;
`;

export const Avatar = styled.div`
    background-color: ${props => props.theme.colors.tertiary};
    width: 45px;
    height: 45px;

    border-radius: 100px;
`;

export const Container = styled.div`
    text-decoration: none;
    background-color: ${props => props.theme.colors.secondary};
    width: 100%;
    height: 50px;

    border-bottom: 1px solid ${props => props.theme.colors.primary};

    padding: 10px;

    &:hover {
        background-color: ${props => props.theme.colors.primary};
        border-bottom: 1px solid ${props => props.theme.colors.secondary};
        opacity: .7;

        transition: all.4s;
    }

    h2{
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme.colors.white};
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;

    h4{
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        color: ${props => props.theme.colors.white};
    }
`;

