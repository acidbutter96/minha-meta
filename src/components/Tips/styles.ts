import styled from 'styled-components';

export const Container = styled.div`
    grid-area:'TP';
    
    height: 100%;
    width: 60%;
    
    margin-left: 60px;
    padding: 0 15px 0px 15px;
    border-radius: 23px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: ${props => props.theme.colors.secondary};
`;

export const TipBody = styled.div`
    position: relative;
    bottom: 38px;

    width: 100%;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const TipButton = styled.div`
    width:90px;
    height: 40px;
    position: relative;
    bottom: 0;
    right: -130px;

    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.quaternary};
    border-radius: 23px;

    transition: all.4s;
    cursor: pointer;
    &:hover{
        background: ${props => props.theme.colors.quaternary};
        color: ${props => props.theme.colors.primary};
        transform: translateY(2px);
    }

    display: flex;
    justify-content: center;
    align-items: center;
`;
export const TipTitle = styled.h3`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 22px;
    color: ${props => props.theme.colors.quaternary};

    padding-bottom: 0px;
    margin-top: 55px;
`;

export const SvgImg = styled.img`
    width: 110%;
    position: relative;
    top: -28px;

    transition: all .4s;

    &:hover{
        transform: translate3D(5px,-3px,2px);
    }
    
`;