import axios from "axios";

export const instance = axios.create({
    baseURL: `http://127.0.0.1:8000/api`
});

export const useApi = () => {
    const defaultOptions = {
        baseURL: `http://127.0.0.1:8000/api`,        
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let instance = axios.create(defaultOptions);

    instance.interceptors.request.use((config) => {
        const token = localStorage.token;
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
    });
    return instance;
};

export const viacep = axios.create({
    baseURL: 'https://viacep.com.br/ws'
})


