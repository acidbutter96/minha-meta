import React, { useState } from 'react';
import {
    Container,
    Header,
    Avatar,
    MenuContainer,
    Top,
    Bottom,
    MenuRoute
} from './styles';
import { MdDashboard, MdExitToApp, MdShowChart } from 'react-icons/md';
import { useAuth } from '../../hooks/auth';



const Sidebar: React.FC = () => {
    const { signOut } = useAuth();

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
                    {/* <MenuRoute href="/panel/sales">
                        <MdAttachMoney />
                        Vendas
                    </MenuRoute> */}
                    <MenuRoute href="/panel/goals">
                        <MdDashboard />
                        Metas
                    </MenuRoute>
                </Top>
                <Bottom>
                    <MenuRoute onClick={signOut}>
                        <MdExitToApp />
                        Sair
                    </MenuRoute>
                </Bottom>
            </MenuContainer>
        </Container>
    );
}

export default Sidebar;