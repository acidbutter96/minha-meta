import styled from 'styled-components';

export const Container = styled.div`
    font-weight: 200;
    font-size: 13px;

    .aim{
        font-weight: 500;
        color: ${props => props.theme.colors.warning};
    }

    .goal{
        font-weight: 500;
        color: ${props => props.theme.colors.success};
    }
    `;