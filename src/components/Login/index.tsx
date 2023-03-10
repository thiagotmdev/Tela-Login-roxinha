import { useState } from "react";
import * as C from "./styled";
import { Botao } from "../Botao";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleInputSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const Dados = () => {
    if (email == "" || senha == "") {
      alert("Informe os dados solicitados");
    } else {
      alert(`Email: ${email} - Senha: ${senha}`);
    }
  };

  return (
    <>
      <C.Container>
        <C.Titulo>Faça o seu login</C.Titulo>
        <C.Sub_titulo>Informe abaixo os seus dados de login</C.Sub_titulo>
        <C.Email_label>Email</C.Email_label>
        <C.Email_imput value={email} onChange={handleInputEmail} type={"email"}/>
        <C.Senha_label>Senha</C.Senha_label>
        <C.Senha_imput value={senha} onChange={handleInputSenha} type={"password"}/>
        <Botao name="Conectar"></Botao>
        <C.Registro>
          Ainda não é cadastrado? <C.link to="/">Registre-se</C.link>
        </C.Registro>
      </C.Container>
    </>
  );
};
