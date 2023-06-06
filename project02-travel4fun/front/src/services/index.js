import axios from "axios";

export const instance = axios.create({
    baseURL: `http://127.0.0.1:8000/api`    
});

export const viacep = axios.create({
    baseURL: 'https://viacep.com.br/ws'
  })
  
    
  