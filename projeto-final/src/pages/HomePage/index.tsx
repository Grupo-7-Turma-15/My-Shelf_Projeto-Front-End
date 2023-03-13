import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/InputDefault";
import { UserContext } from "../../providers/UserContext";
import { IFormLogin } from "../../providers/UserContext/@types";
import { StyledHomePage } from "./style";

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
        <Input
          label="Seu email"
          type="email"
          register={register("email")}
          error={errors.email}
        />
        <Input
          label="Sua senha"
          type="password"
          register={register("password")}
          error={errors.password}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => goToRegister()}>Cadastrar</button>
    </StyledHomePage>
  );
}
