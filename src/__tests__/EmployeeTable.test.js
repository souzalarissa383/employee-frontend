import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EmployeeTable from '../components/EmployeeTable';

const mockEmployees = [
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

describe('EmployeeTable', () => {
  beforeEach(() => render(<EmployeeTable employees={mockEmployees} />));

  it('deve renderizar a tabela de funcionários corretamente', () => {
    
    mockEmployees.forEach(({ name }) => {
      const nameElements = screen.getAllByText(name);
      expect(nameElements.length).toBeGreaterThan(0);
    });
  });

  it('deve expandir e colapsar as informações adicionais ao clicar no botão', async () => {
   
    const expandButtons = screen.getAllByRole('button');
    fireEvent.click(expandButtons[0]); 

    
    await waitFor(() => {
      const additionalInfo = screen.getByText('Back-end', { selector: '.info-value' }); 
      expect(additionalInfo).toBeInTheDocument();
    });

    
    fireEvent.click(expandButtons[0]);

   
    await waitFor(() => {
      const additionalInfo = screen.queryByText('Back-end', { selector: '.info-value' });
      expect(additionalInfo).not.toBeInTheDocument();
    });
  });
});