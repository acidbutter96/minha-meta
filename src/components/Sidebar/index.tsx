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
                    <MenuRoute>
                        <MdShowChart />
                        Charts
                    </MenuRoute>
                    <MenuRoute>
                        <MdAttachMoney />
                        Charts
                    </MenuRoute>
                    <MenuRoute>
                        <MdDashboard />
                        Charts
                    </MenuRoute>
                </Top>
                <Bottom>
                    <MenuRoute>
                        <MdExitToApp />
                        Sair
                    </MenuRoute>
                </Bottom>
            </MenuContainer>
        </Container>
    );
}

export default Sidebar;