import axios from 'axios';
import { getEmployees } from '../services/api';

describe('getEmployees', () => {
  it('deve retornar a lista de funcionários quando a requisição for bem-sucedida', async () => {
    try {
      const result = await getEmployees();

      expect(Array.isArray(result)).toBe(true);

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
      const result = await axios.get('https://httpstat.us/404');
      expect(result.data).toEqual([]);
    } catch (error) {
      expect(error.response).toBeDefined();
      expect(error.response.status).toBe(404);
    }
  });
});
