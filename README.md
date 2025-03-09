# Employee Frontend

Este projeto é uma aplicação web responsiva que exibe uma lista de colaboradores em uma tabela, com funcionalidades de pesquisa e formatação de dados. Foi desenvolvido utilizando React, SASS e uma API simulada com `json-server`.

## Funcionalidades

- **Tabela de Colaboradores:** Exibe a foto, nome, cargo, data de admissão e telefone dos colaboradores.
- **Pesquisa:** Permite filtrar colaboradores por nome, cargo ou telefone.
- **Formatação de Dados:** 
  - Datas no formato `dd/MM/yyyy`.
  - Telefones no formato `(XX) XXXXX-XXXX`.
- **Responsividade:** A tabela é adaptável para diferentes tamanhos de tela, incluindo dispositivos móveis.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **SASS:** Pré-processador CSS para estilização avançada.
- **Axios:** Cliente HTTP para consumir a API.
- **json-server:** Simula uma API RESTful para desenvolvimento.

## Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em sua máquina.

### Pré-requisitos

- Node.js (v16 ou superior)
- npm (v8 ou superior)

### Passo 1: Clonar o Repositório

Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/employee-frontend.git
cd employee-frontend


### Passo 2: Instalar Dependências

Instale as dependências do projeto:

```bash
npm install

### Passo 3: Iniciar o JSON Server

O projeto utiliza o json-server para simular uma API. Inicie o servidor com o seguinte comando:

```bash
npx json-server --watch db.json --port 3000

Isso fará com que os dados estejam disponíveis em http://localhost:3000/employees.

### Passo 4: Executar o Projeto

Inicie o servidor de desenvolvimento do React:

```bash
npm start

O projeto será aberto automaticamente no navegador em http://localhost:3000.

### Passo 5: Testar a Aplicação

- Acesse a página inicial para visualizar a lista de colaboradores.
- Utilize o campo de pesquisa para filtrar os colaboradores por nome, cargo ou telefone.
- Redimensione a janela do navegador para testar a responsividade da tabela.

### Estrutura do Projeto

employee-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── EmployeeTable.js
│   │   └── EmployeeTable.scss
│   ├── pages/
│   │   ├── Home.js
│   │   └── Home.scss
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── App.scss
│   ├── __tests__/                  # Pasta de testes
│   │   ├── EmployeeTable.test.js   # Testes do componente EmployeeTable
│   │   ├── Home.test.js            # Testes da página Home
│   │   └── api.test.js             # Testes do serviço de API
│   ├── App.js
│   ├── index.js
│   └── ...
├── db.json
├── package.json
└── README.md

### Testes

O projeto inclui testes unitários e de integração para garantir o funcionamento correto dos componentes e da lógica de negócio. Os testes estão localizados na pasta src/__tests__/.

## Testes do Serviço de API (api.test.js)

- Teste de Sucesso (deve retornar a lista de funcionários quando a requisição for bem-sucedida):
    - Verifica se a função getEmployees retorna um array.
    - Verifica se o primeiro item do array possui as propriedades id, name e job.

- Teste de Erro (deve retornar um array vazio em caso de erro na requisição):
    - Simula uma requisição falha (status 404) e verifica se o erro é tratado corretamente.

## Testes do Componente EmployeeTable (EmployeeTable.test.js)
- Teste de Renderização (deve renderizar a tabela de funcionários corretamente):
    - Verifica se os nomes dos funcionários estão sendo renderizados corretamente na tabela.

- Teste de Expansão/Colapso (deve expandir e colapsar as informações adicionais ao clicar no botão):
    - Verifica se as informações adicionais (como o cargo) são exibidas e ocultadas ao clicar no botão.

## Testes da Página Home (Home.test.js)
- Teste de Renderização (deve renderizar o componente corretamente):
    - Verifica se a página Home renderiza corretamente e exibe os dados dos funcionários.

- Teste de Filtro (deve filtrar os funcionários ao digitar no campo de busca):
    - Verifica se a funcionalidade de pesquisa filtra os colaboradores corretamente.


