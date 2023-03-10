import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 450px;
  height: 470px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 18px 1px rgba(10, 10, 10, 0.08);

  @media (max-width: 1024px){
    width: 350px;
    height: 370px;
  }

  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
  }
`;

export const Titulo = styled.h1`
  color: rgb(111, 8, 196);
  font-size: 20px;
  font-weight: medium;
`;

export const Sub_titulo = styled.h2`
  font-size: 12px;
  color: #474749;
  margin-top: 18px;
  margin-bottom: 30px;
`;

export const Email_label = styled.label`
  color: #7f7e83;
  font-size: 12px;
  margin-top: 14px;
  margin-bottom: 5px;
  margin-left: -300px;
`;

export const Email_imput = styled.input`
  width: 309px;
  height: 30px;
  background-color: #f4f4f4;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  line-height: 30px;
  padding: 10px;
`;

export const Senha_label = styled.label`
  color: #7f7e83;
  font-size: 12px;
  margin-bottom: 5px;
  margin-left: -300px;
`;

export const Senha_imput = styled.input`
  width: 309px;
  height: 30px;
  background-color: #f4f4f4;
  margin-bottom: 40px;
  border: none;
  border-radius: 10px;
  line-height: 30px;
  padding: 10px;
`;

export const Registro = styled.div`
  color: #474749;
  font-size: 12px;
  margin-top: 40px;
`;

export const link = styled(Link)`
  color: #3939ac;
  font-size: 12px;
`;