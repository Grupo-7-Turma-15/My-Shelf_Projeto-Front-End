import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/InputDefault";
import { UserContext } from "../../providers/UserContext";
import { IFormRegister } from "../../providers/UserContext/@types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledForm, StyledRegisterPage } from "./style";

const formSchema = yup
    .object({
        name: yup.string().required("Nome obrigatório"),
        email: yup
            .string()
            .required("Email obrigatório")
            .email("E-mail inválido"),
        password: yup
            .string()
            .required("Senha obrigatória")
            .matches(/.{6,}/, "Deve conter no mínimo 6 caracteres"),
        password_confirm: yup
            .string()
            .required("Please retype your password.")
            .oneOf([yup.ref("password")], "As senhas são diferentes"),
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
            <div className="register__container">
                <button className="return__button" onClick={() => goToLogin()}>
                    Voltar
                </button>
                <StyledForm onSubmit={handleSubmit(submit)}>
                    <div className="form__title">
                        <h1>Crie sua conta</h1>
                        <p>Rápido e grátis, Vamos nessa!</p>
                    </div>

                    <Input
                        className="input"
                        label="Nome"
                        type="name"
                        register={register("name")}
                        error={errors.name}
                    />
                    <Input
                        className="input"
                        label="Email"
                        type="email"
                        register={register("email")}
                        error={errors.email}
                    />
                    <Input
                        className="input"
                        label="Senha"
                        type="password"
                        register={register("password")}
                        error={errors.password}
                    />
                    <Input
                        className="input"
                        label="Confrimar senha"
                        type="password"
                        register={register("password_confirm")}
                        error={errors.password_confirm}
                    />
                    <button className="register__button" type="submit">
                        Cadastrar
                    </button>
                </StyledForm>
            </div>
        </StyledRegisterPage>
    );
}
