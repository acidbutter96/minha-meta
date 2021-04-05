import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: auto;
    grid-template-areas: 'SB CN';

    height: 100vh;
`;