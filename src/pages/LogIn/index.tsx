import React from 'react';
import {
    Container,
    Logo,
    Form,
    SignInButton

} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const LogIn: React.FC = () => {
    return (
        <Container>
            <Logo>
                {/* <img src={ } /> */}
                <h2>Minha Meta</h2>
            </Logo>

            <Form onSubmit={() => { }}>
                <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required />
                <Input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    required
                />

                <Button type="submit">Entrar</Button>
                <SignInButton href="/signin">Criar conta</SignInButton>
            </Form>
        </Container>);
}

export default LogIn;