import React, { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BookContext } from "../../../providers/BookContext";
import { UserContext } from "../../../providers/UserContext";
import Input from "../../InputDefault";

export interface IBookFormCreate {
  userId: number;
  title: string;
  type?: string;
  cover?: string;
  synopsis?: string;
  author?: string;
  stopped_at?: string;
  status?: "lido" | "lendo" | "quero ler";
}

const CreateForm = () => {
  const userId = localStorage.getItem("@KenzieBooks:ID");
  const token = localStorage.getItem("@KenzieBooks:TOKEN");

  const { titleCreate, setCreate } = useContext(BookContext);

  const { update, setUpdate } = useContext(UserContext);

  const { register, handleSubmit } = useForm<IBookFormCreate>();

  const submit: SubmitHandler<IBookFormCreate> = (formData) => {
    titleCreate(formData);

    setCreate(false);
    setUpdate(!update)
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input label="Titulo" register={register("title")} />
      <Input label="Sinopse" register={register("synopsis")} />
      <Input label="Capa" register={register("cover")} />
      <Input label="Autor" register={register("author")} />
      <Input label="Tipo" register={register("type")} />
      <Input label="Onde parei" register={register("stopped_at")} />
      <Input
        label="ID do usuário"
        register={register("userId")}
        value={Number(userId)}
      />
      <select {...register("status")}>
        <option value="lido">Lido</option>
        <option value="lendo">Lendo</option>
        <option value="quero ler">Quero ler</option>
      </select>
      <button type="submit">Criar</button>
      <button onClick={() => setCreate(false)}>Cancelar</button>
    </form>
  );
};

export default CreateForm;
