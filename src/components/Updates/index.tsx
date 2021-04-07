import React from 'react';
import {
    Container,
    ListContainer,
    Title,
    List
} from './styles';
import UpdateFrame from '../UpdateFrame';

const testList = [
    {
        avatar_url: "#",
        title: "Notícia 1",
        url: "#"
    },
    {
        avatar_url: "#",
        title: "Notícia 2",
        url: "#"
    },
    {
        avatar_url: "#",
        title: "Notícia 3",
        url: "#"
    },
    {
        avatar_url: "#",
        title: "Notícia 4",
        url: "#"
    },
    {
        avatar_url: "#",
        title: "Notícia 5",
        url: "#"
    },
    {
        avatar_url: "#",
        title: "Notícia 6",
        url: "#"
    },
    {
        avatar_url: "#",
        title: "Notícia 7",
        url: "#"
    },
    {
        avatar_url: "#",
        title: "Notícia 8",
        url: "#"
    },
    {
        avatar_url: "#",
        title: "Notícia 9",
        url: "#"
    },
]


const Updates: React.FC = ({ children }) => {
    return (
        <Container>
            <ListContainer>
                <Title>
                    <h1>Atualizações</h1>
                </Title>
                <List>
                    {testList.map((el) => <UpdateFrame avatar_url={el.avatar_url} title={el.title} url={el.url} />)}
                </List>
            </ListContainer>
        </Container>
    );
}

export default Updates;