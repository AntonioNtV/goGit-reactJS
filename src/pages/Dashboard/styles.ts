import styled from 'styled-components';
import { shade } from 'polished';

const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 20px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3
    }
  }
  button {
    width: 210px;
    height: 70px;

    background-color: #04d461;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #FFF;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.1, '#04d461')}
    }
  }
`;

export { Title, Form };
