import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/Home';
import { getEmployees } from '../services/api';

// Mock do serviço getEmployees
jest.mock('../services/api');

describe('Home', () => {
  it('deve renderizar o componente corretamente', async () => {
    const mockData = [
      {
        id: 1,
        name: 'João',
        job: 'Back-end',
        admission_date: '2019-12-02T00:00:00.000Z',
        phone: '5551234567890',
        image: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
      },
      {
        id: 2,
        name: 'Roberto',
        job: 'Front-end',
        admission_date: '2020-03-12T00:00:00.000Z',
        phone: '5550321654789',
        image: 'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
      },
    ];
    getEmployees.mockResolvedValueOnce(mockData);

    render(<Home />);

    // Verifica se o título "Funcionários" está no documento
    expect(screen.getByText('Funcionários')).toBeInTheDocument();

    // Aguarda a renderização dos dados da API
    await waitFor(() => {
      const joaoElements = screen.getAllByText('João');
      const robertoElements = screen.getAllByText('Roberto');
      expect(joaoElements.length).toBeGreaterThan(0); // Verifica se pelo menos um elemento "João" está presente
      expect(robertoElements.length).toBeGreaterThan(0); // Verifica se pelo menos um elemento "Roberto" está presente
    });
  });

  it('deve filtrar os funcionários ao digitar no campo de busca', async () => {
    const mockData = [
      {
        id: 1,
        name: 'João',
        job: 'Back-end',
        admission_date: '2019-12-02T00:00:00.000Z',
        phone: '5551234567890',
        image: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
      },
      {
        id: 2,
        name: 'Roberto',
        job: 'Front-end',
        admission_date: '2020-03-12T00:00:00.000Z',
        phone: '5550321654789',
        image: 'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
      },
    ];
    getEmployees.mockResolvedValueOnce(mockData);

    render(<Home />);

    // Aguarda a renderização dos dados da API
    await waitFor(() => {
      const joaoElements = screen.getAllByText('João');
      const robertoElements = screen.getAllByText('Roberto');
      expect(joaoElements.length).toBeGreaterThan(0); // Verifica se pelo menos um elemento "João" está presente
      expect(robertoElements.length).toBeGreaterThan(0); // Verifica se pelo menos um elemento "Roberto" está presente
    });

    // Obtém o campo de busca e simula a digitação
    const searchInput = screen.getByPlaceholderText('Pesquisar');
    fireEvent.change(searchInput, { target: { value: 'João' } });

    // Verifica se apenas o funcionário filtrado é exibido
    await waitFor(() => {
      const joaoElements = screen.getAllByText('João');
      expect(joaoElements.length).toBeGreaterThan(0); // Verifica se pelo menos um elemento "João" está presente
      expect(screen.queryByText('Roberto')).not.toBeInTheDocument();
    });
  });
});