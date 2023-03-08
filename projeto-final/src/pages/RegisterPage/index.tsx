

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/InputDefault";
import { IFormRegister } from "../../providers/UserContext/@types";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>();


  const submit: SubmitHandler<IFormRegister> =(formData:IFormRegister)=>{
    register(formData)
  }
  
  return (
    <form onSubmit={handleSubmit(submit)}>
        <Input label="Seu nome" register={register("name")} error={errors.name}/>
        <Input label="Seu email" register={register("email")} error={errors.email}/>
        <Input label="Seu senha" register={register("password")} error={errors.password}/>
        <button type="submit">Cadastrar</button>
    </form>
  )
}
