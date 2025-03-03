import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/api';
import EmployeeTable from '../components/EmployeeTable';
import './Home.scss';
import logo from '../assets/Logo.png';
import searchIcon from '../assets/search.png';

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
      }
    };
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.phone.includes(searchTerm)
  );

  return (
    <div className="home-container">
      <header className="header">
        <img src={logo} alt="BeTalent Logo" className="logo" />
      </header>
      <div className="content">
        <div className="header-content">
          <h1>Funcionários</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <img src={searchIcon} alt="Search" className="search-icon" />
          </div>
        </div>
        <EmployeeTable employees={filteredEmployees} />
      </div>
    </div>
  );
};

export default Home;