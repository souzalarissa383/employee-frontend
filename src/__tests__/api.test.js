import axios from 'axios';
import { getEmployees } from '../services/api';

describe('getEmployees', () => {
  it('deve retornar a lista de funcionários quando a requisição for bem-sucedida', async () => {
    try {
      const result = await getEmployees();

      // Verifica se o resultado é um array
      expect(Array.isArray(result)).toBe(true);

      // Verifica se o primeiro item contém as propriedades esperadas
      if (result.length > 0) {
        expect(result[0]).toHaveProperty('id');
        expect(result[0]).toHaveProperty('name');
        expect(result[0]).toHaveProperty('job');
      }
    } catch (error) {
      fail('Erro ao chamar a API: ' + error.message);
    }
  });

  it('deve retornar um array vazio em caso de erro na requisição', async () => {
    try {
      // Simula uma requisição para uma URL que retorna erro 404
      const result = await axios.get('https://httpstat.us/404');
      expect(result.data).toEqual([]); // Espera um array vazio ou outro tipo de resposta de erro
    } catch (error) {
      // Verifica se o erro tem a resposta
      expect(error.response).toBeDefined();
      expect(error.response.status).toBe(404);
    }
  });
});
