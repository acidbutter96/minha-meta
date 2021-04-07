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

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [birthday, setBirthday] = useState<string>('');
    const [document, setDocument] = useState<string>('');

    const { signIn } = useAuth();

    return (
        <Container>
            <Logo>
                {/* <img src={ } /> */}
                <h2>Meu Cadastro</h2>
            </Logo>

            <Form method="post" onSubmit={async (e) => {
                e.preventDefault();
                signIn(email, password, birthday, document);
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
                <Input
                    type="date"
                    name="birthday"
                    placeholder="Aniversário"
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    name="document"
                    placeholder="CPF"
                    onChange={(e) => setDocument(e.target.value)}
                    required
                />

                <Button type="submit">Cadastrar</Button>
            </Form>
        </Container>);
}

export default SignIn;