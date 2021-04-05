import styled from 'styled-components';

export const Container = styled.div`
        grid-area: 'SB';

        background-color: ${props => props.theme.colors.secondary};
    `;

export const Header = styled.nav`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25%;
    `;
export const Avatar = styled.div`
        display: flex;
        height: 70%;
        width: 60%;
        border-radius: 1000px;
        background-color: ${props => props.theme.colors.quaternary};
    `;
export const MenuContainer = styled.div`
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px 20px 0px 20px;
    `;
export const Top = styled.div`
    `;
export const Bottom = styled.div`
        
    `;
export const MenuRoute = styled.a`
        color: ${props => props.theme.colors.white};
        text-decoration: none;

        display: flex;
        align-items: center;
        margin: 10px 0;

        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        cursor: pointer;

        transition: all .4s;

        &:hover {
            opacity: .7;
            color: ${props => props.theme.colors.tertiary};
        }

        >svg{
            font-size: 30px;
            margin-right: 10px
        }
        
    `;
