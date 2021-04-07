import React from 'react';
import {
    Container,
    Logo,
    Form,
    SignInButton

} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Logo>
                {/* <img src={ } /> */}
                <h2>Meu Cadastro</h2>
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
                <Input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    required
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    required
                />

                <Button type="submit">Cadastrar</Button>
            </Form>
        </Container>);
}

export default SignIn;