import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="github explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/38543529?s=460&u=7975dceb7e4034ab577815434186790fada4b1cd&v=4"
          alt="Antonio Neto"
        />
        <div>
          <strong>Analytics</strong>
          <p> Um negocio mt louco </p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/38543529?s=460&u=7975dceb7e4034ab577815434186790fada4b1cd&v=4"
          alt="Antonio Neto"
        />
        <div>
          <strong>Analytics</strong>
          <p> Um negocio mt louco </p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>

  </>
);

export default Dashboard;
