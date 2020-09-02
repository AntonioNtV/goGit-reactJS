import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666
    }

    svg {
      margin-right: 8px;
    }
  }


`;

const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 24px;


      strong {
        font-size: 36px;
        color: #3D3D4D
      }

      p {
        margin-top: 4px;
        font-size: 18px;
        color: #737380;
      }
    }

  }

  ul {
    margin-top: 40px;
    display: flex;
    list-style: none;



      li {

        & + li {
          margin-left: 80px;
        }

        strong {
          display: block;
          font-size: 36px;
          color: #3D3D4D;
        }

        span {
          display: block;
          font-size: 20px;
          color: #6C6C80
        }
      }
  }
`;

const Issues = styled.div`
margin-top: 80px;

a {
  background: #FFF;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  & + a {
    margin-top: 16px;
  }

  &:hover  {
    transform: translateX(10px)
  }
}


div {
  margin: 0 16px;
  flex: 1;

  strong {
    font-size: 20px;
    color: #3d3d4d
  }

  p {
    font-size: 18px;
    color: #a8a8b3;
    margin-top: 4px;
  }
}

svg {
  margin-left: auto;
  color: #cbcbd6
}


`;

export { Header, RepositoryInfo, Issues };
