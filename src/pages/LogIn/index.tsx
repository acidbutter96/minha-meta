import React, { useState } from 'react';
import {
    Container,
    Logo,
    Form,
    SignInButton

} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

const LogIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { logIn } = useAuth();

    return (
        <Container>
            <Logo>
                <h2>MinhaMeta</h2>
            </Logo>

            <Form method="post" onSubmit={(e) => {
                e.preventDefault();
                console.log(email);
                console.log(password);
                logIn(email, password)
            }}>
                <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                <Input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <Button type="submit">Entrar</Button>
                <SignInButton href="/signin">Criar conta</SignInButton>
            </Form>
        </Container>);
}

export default LogIn;