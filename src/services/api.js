import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Certifique-se de que a porta está correta
});

export const getEmployees = async () => {
  try {
    const response = await api.get('/employees');
    console.log('Dados da API:', response.data); // Adicione este log
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    return []; // Retorna um array vazio em caso de erro
  }
};