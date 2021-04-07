import styled from 'styled-components';

export const Container = styled.button`
    width: 50%;

    margin: 7px 0;
    padding: 10px;

    border-radius: 13px;

    font-family: 'Roboto';

    font-size: 20px;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.tertiary};

    cursor: pointer;

    transition: all.3s;

    &:hover{
        color: ${props => props.theme.colors.tertiary};
        background-color: ${props => props.theme.colors.primary};
        opacity: .7;
    }
    `;