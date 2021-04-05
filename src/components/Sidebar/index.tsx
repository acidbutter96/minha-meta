import React from 'react';
import {
    Container,
    Header,
    Avatar,
    MenuContainer,
    Top,
    Bottom,
    MenuRoute
} from './styles';
import {
    MdShowChart,
    MdAttachMoney,
    MdDashboard,
    MdExitToApp,
} from 'react-icons/md';

const Sidebar: React.FC = () => {
    return (
        <Container>
            <Header>
                <Avatar></Avatar>
            </Header>
            <MenuContainer>
                <Top>
                    <MenuRoute href="/charts">
                        <MdShowChart />
                        Charts
                    </MenuRoute>
                    <MenuRoute href="/sales">
                        <MdAttachMoney />
                        Vendas
                    </MenuRoute>
                    <MenuRoute href="/goals">
                        <MdDashboard />
                        Metas
                    </MenuRoute>
                </Top>
                <Bottom>
                    <MenuRoute href="#">
                        <MdExitToApp />
                        Sair
                    </MenuRoute>
                </Bottom>
            </MenuContainer>
        </Container>
    );
}

export default Sidebar;