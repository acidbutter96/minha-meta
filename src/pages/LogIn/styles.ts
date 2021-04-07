import styled from 'styled-components';
import bg from '../../assets/images/vectors/login-bg.svg';

export const Container = styled.div`

    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};
    background-image: url(${bg});
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: 45vw;

    `;

export const Logo = styled.div`

    display: flex;
    align-items: center;
    
    margin-bottom: 30px;

    >h2 {
        font-family: 'Rubik Mono One',sans-serif;
        color: ${props => props.theme.colors.white};
    }

    `;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 400px;
    height: 300px;

    opacity: .9;

    padding: 30px;

    border-radius: 23px;

    background-color: ${props => props.theme.colors.secondary};

    `;
export const SignInButton = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.white};

    transition: all.3s;

    &:hover{
        color:${props => props.theme.colors.tertiary};
    }
`;
export const FormTitle = styled.div`
    `;