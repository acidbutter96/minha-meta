import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 94%;

    transition: all.3s;

    &:hover{
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.secondary};
        border-bottom: 1px solid ${props => props.theme.colors.primary};
        transform: translateX(3px);
    }

    border-bottom: 1px solid ${props => props.theme.colors.secondary};
`;
export const ListButton = styled.div`
    width: 98px;
    height: 32px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 16px;
    font-weight: 500;

    margin: 10px 10px;
    padding: 0 5px;

    border-radius: 23px;
    background-color: rgba(255,0,0,.4);

    color: ${props => props.theme.colors.warning};

    .react-icons {
        vertical-align: middle;
        font-size: 30px;
        font-weight: 500;
    }
`;
export const Amount = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
`;

export const Date = styled.div`
    position: relative;
    bottom: -15px;
    left: 20px;

    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    z-index: 0;
`;