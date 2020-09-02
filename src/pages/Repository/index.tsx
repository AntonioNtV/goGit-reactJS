import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';
import api from '../../services/api';

interface RepositoryParams {
  repository: string
}
interface RepositoryInfo {
  full_name: string
  description: string
  owner: {
    avatar_url: string
  }
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<RepositoryInfo | undefined>(undefined);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get<RepositoryInfo>(`repos/${params.repository}`).then((response) => {
      const repositoryInfo: RepositoryInfo = response.data;
      setRepository(repositoryInfo);
    });
  });

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/38543529?s=460&u=7975dceb7e4034ab577815434186790fada4b1cd&v=4" alt="Antonio" srcSet="" />
          <div>
            <strong>facebook/react</strong>
            <p>Descricao do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="aaa">
          <div>
            <strong>Issue 01</strong>
            <p>Antonio Neto</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>

    </>
  );
};

export default Repository;
