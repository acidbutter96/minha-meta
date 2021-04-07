import React, { createContext, useState, useContext } from 'react';
import { login } from '../providers/requests';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}


const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-meta:logged');

        return !!isLogged;
    });

    const signIn = async (email: string, password: string) => {

        const response = await login(email, password);

        console.log(response);

        if (!response.error) {
            localStorage.setItem('@minha-carteira:logged', 'true');
            setLogged(true);
        } else {
            alert(response.message);
        }
    }

    const signOut = () => {
        localStorage.removeItem('@minha-meta:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{ logged, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };