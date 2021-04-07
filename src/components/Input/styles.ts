import styled from 'styled-components';

export const Container = styled.input`
        width: 100%;

        margin: 7px 0;
        
        padding: 10px;

        border-radius: 13px;

        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.primary};

        &[type="text"]{
            color: ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.primary};
        }
    `;