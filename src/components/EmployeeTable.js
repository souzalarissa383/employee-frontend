import React, { useState } from 'react';
import './EmployeeTable.scss';
import vectorIcon from '../assets/Vector.png';

const EmployeeTable = ({ employees }) => {
  const [expandedEmployee, setExpandedEmployee] = useState(null);

  const toggleExpand = (id) => {
    setExpandedEmployee(expandedEmployee === id ? null : id);
  };

  return (
    <div className="employee-table">
      {/* Versão Web */}
      <table className="web-view">
        <thead>
          <tr>
            <th><h2>Foto</h2></th> {/* Substituído por <h2> */}
            <th><h2>Nome</h2></th> {/* Substituído por <h2> */}
            <th><h2>Cargo</h2></th> {/* Substituído por <h2> */}
            <th><h2>Data de Admissão</h2></th> {/* Substituído por <h2> */}
            <th><h2>Telefone</h2></th> {/* Substituído por <h2> */}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <img src={employee.image} alt={employee.name} className="employee-image" />
              </td>
              <td>
                <h3>{employee.name}</h3> {/* Substituído por <h3> */}
              </td>
              <td>
                <h3>{employee.job}</h3> {/* Substituído por <h3> */}
              </td>
              <td>
                <h3>{new Date(employee.admission_date).toLocaleDateString('pt-BR')}</h3> {/* Substituído por <h3> */}
              </td>
              <td>
                <h3>+55 {employee.phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')}</h3> {/* Adicionado +55 */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Versão Mobile */}
      <div className="mobile-view">
        <div className="table-header">
          <span className="header-photo"><h2>Foto</h2></span> {/* Substituído por <h2> */}
          <span className="header-name"><h2>Nome</h2></span> {/* Substituído por <h2> */}
          <span className="header-icon">●</span>
        </div>
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <div className="employee-info" onClick={() => toggleExpand(employee.id)}>
              <img src={employee.image} alt={employee.name} className="employee-image" />
              <span className="employee-name">{employee.name}</span>
              <button className="expand-button">
                <img
                  src={vectorIcon}
                  alt="Expandir"
                  className={`expand-icon ${expandedEmployee === employee.id ? 'expanded' : ''}`}
                />
              </button>
            </div>
            {expandedEmployee === employee.id && (
              <div className="employee-additional-info">
                <div className="info-row">
                  <span className="info-label">Cargo</span>
                  <h3 className="info-value">{employee.job}</h3> {/* Substituído por <h3> */}
                </div>
                <div className="info-row">
                  <span className="info-label">Data de Admissão</span>
                  <h3 className="info-value">{new Date(employee.admission_date).toLocaleDateString('pt-BR')}</h3> {/* Substituído por <h3> */}
                </div>
                <div className="info-row">
                  <span className="info-label">Telefone</span>
                  <h3 className="info-value">+55 {employee.phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')}</h3> {/* Substituído por <h3> */}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTable;