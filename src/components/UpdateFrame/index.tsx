import React from 'react';
import {
    Container,
    Content,
    Avatar,
    Title
} from './styles';

import test from '../../assets/test.png';

interface IUpdateFrame {
    avatar_url: string;
    title: string;
    url: string;
}

const UpdateFrame: React.FC<IUpdateFrame> = ({ avatar_url, title, url }) => {
    return (
        <Container>
            <Content href={url} className="alink">
                <Avatar />
                <Title>
                    <h4>{title}</h4>
                </Title>
            </Content>
        </Container>);
}

export default UpdateFrame;