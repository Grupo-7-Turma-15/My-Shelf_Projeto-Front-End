import { useContext } from "react";
import { StyledRegisterPage } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/InputDefault";
import { UserContext } from "../../providers/UserContext";
import { IFormRegister } from "../../providers/UserContext/@types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const formSchema = yup
  .object({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/.{6,}/, "Deve conter no mínimo 6 caracteres"),
    img: yup.string(),
  })
  .required();

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({ resolver: yupResolver(formSchema) });

  const { userRegister, goToLogin } = useContext(UserContext);

  const submit: SubmitHandler<IFormRegister> = (formData) => {
    userRegister(formData);
  };

  return (
    <StyledRegisterPage>
      <button className="backBtn" onClick={() => goToLogin()}>
        Voltar para Login
      </button>
      <form onSubmit={handleSubmit(submit)}>
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <Input
          label="Seu nome"
          type="name"
          register={register("name")}
          error={errors.name}
          className={"input"}
        />
        <Input
          label="Seu email"
          type="email"
          register={register("email")}
          error={errors.email}
          className={"input"}
        />
        <Input
          label="Seu senha"
          type="password"
          register={register("password")}
          error={errors.password}
          className={"input"}
        />
        <Input
          label="Seu avatar"
          type="img"
          register={register("img")}
          error={errors.img}
          className={"input"}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </StyledRegisterPage>
  );
}
