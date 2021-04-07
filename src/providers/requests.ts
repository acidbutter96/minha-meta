import Axios from 'axios';

const provider = 'http://localhost:8080/';

export async function login(email: string, password: string) {
    try {
        const response = await Axios.post(`${provider}v1/session`, {
            email,
            password
        });
        return response.data;
    } catch (e) {
        return e.data;
    }

}

export async function signin(
    email: string,
    password: string,
    birthday: string,
    document: string) {
    try {
        const response = await Axios.post(`${provider}v1/vendors`, {
            email,
            password,
            birthday,
            document
        });
        return response.data;
    } catch (e) {
        return e.data;
    }

}