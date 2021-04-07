import React, { createContext, useState, useContext } from 'react';
import { login, signin } from '../providers/requests';

interface IAuthContext {
    logged: boolean;
    logIn(email: string, password: string): void;
    signOut(): void;
    signIn(email: string, password: string, birthday: string, document: string): void;
}


const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-meta:logged');

        return !!isLogged;
    });

    const logIn = async (email: string, password: string) => {

        const response = await login(email, password);

        console.log(response);

        if (!response.error) {
            localStorage.setItem('@minha-carteira:logged', 'true');
            setLogged(true);
        } else {
            alert(response.message);
        }
    }

    const signIn = async (email: string,
        password: string,
        birthday: string,
        document: string) => {
        /* const response = await signin(email, password, birthday, document);
        console.log(response.data);
        if (!response.error) {
            alert('usuário criado com sucesso');
        } else {
            alert(response.message);
        } */
    }



    const signOut = () => {
        localStorage.removeItem('@minha-meta:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{ logged, logIn, signOut, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };