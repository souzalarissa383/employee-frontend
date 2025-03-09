import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/Home';
import { getEmployees } from '../services/api';

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

   
    expect(screen.getByText('Funcionários')).toBeInTheDocument();

   
    await waitFor(() => {
      const joaoElements = screen.getAllByText('João');
      const robertoElements = screen.getAllByText('Roberto');
      expect(joaoElements.length).toBeGreaterThan(0); 
      expect(robertoElements.length).toBeGreaterThan(0); 
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

    await waitFor(() => {
      const joaoElements = screen.getAllByText('João');
      const robertoElements = screen.getAllByText('Roberto');
      expect(joaoElements.length).toBeGreaterThan(0); 
      expect(robertoElements.length).toBeGreaterThan(0); 
    });

    const searchInput = screen.getByPlaceholderText('Pesquisar');
    fireEvent.change(searchInput, { target: { value: 'João' } });

    await waitFor(() => {
      const joaoElements = screen.getAllByText('João');
      expect(joaoElements.length).toBeGreaterThan(0); 
      expect(screen.queryByText('Roberto')).not.toBeInTheDocument();
    });
  });
});