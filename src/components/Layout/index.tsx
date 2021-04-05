import React from 'react';
import {Container} from './styles';

import Content from '../Content';
import Sidebar from '../Sidebar';

const Layout: React.FC = ({children})=>{
    return (
        <Container>
            <Sidebar/>
            <Content>
                {children}
            </Content>
        </Container>
    );
}

export default Layout;