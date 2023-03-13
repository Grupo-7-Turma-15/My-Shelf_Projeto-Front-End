import React, { useContext } from "react";
import { StyledHomePage } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/InputDefault";
import { UserContext } from "../../providers/UserContext";
import { IFormLogin } from "../../providers/UserContext/@types";

export default function HomePage() {
  const { goToRegister, userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();

  const submit: SubmitHandler<IFormLogin> = (formData) => {
    userLogin(formData);
  };

  return (
    <StyledHomePage>
      <form onSubmit={handleSubmit(submit)}>
        <h1>Login</h1>
        <Input
          className="input"
          label="Seu email"
          type="email"
          register={register("email")}
          error={errors.email}
        />
        <Input
          className="input"
          label="Sua senha"
          type="password"
          register={register("password")}
          error={errors.password}
        />
        <button className="loginBtn" type="submit">
          Entrar
        </button>
        <p>Ainda não possui conta?</p>
        <button className="registerBtn" onClick={() => goToRegister()}>
          Cadastre-se
        </button>
      </form>
    </StyledHomePage>
  );
}
