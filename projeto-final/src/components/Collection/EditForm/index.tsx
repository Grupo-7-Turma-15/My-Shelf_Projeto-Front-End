import React, { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BookContext } from "../../../providers/BookContext";
import { UserContext } from "../../../providers/UserContext";
import Input from "../../InputDefault";

export interface IBookFormEdit {
  id: number;
  title: string;
  type?: string;
  cover?: string;
  synopsis?: string;
  author?: string;
  stopped_at?: string;
  status?: "lido" | "lendo" | "quero ler";
}

const EditForm = () => {
  const { edit, setEdit, titleEdit } = useContext(BookContext);

  const { userProfile } = useContext(UserContext);

  const { register, handleSubmit } = useForm<IBookFormEdit>({
    defaultValues: {
      title: edit!.title,
      synopsis: edit!.synopsis,
      cover: edit!.cover,
      author: edit!.author,
      type: edit!.type,
      stopped_at: edit!.stopped_at,
      status: edit!.status,
    },
  });

  const submit: SubmitHandler<IBookFormEdit> = (formData) => {
    titleEdit(edit!.id, formData);

    userProfile();
    setEdit(null);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input label="Titulo" register={register("title")} />
      <Input label="Sinopse" register={register("synopsis")} />
      <Input label="Capa" register={register("cover")} />
      <Input label="Autor" register={register("author")} />
      <Input label="Tipo" register={register("type")} />
      <Input label="Onde parei" register={register("stopped_at")} />
      <select {...register("status")}>
        <option value="">Escolha uma opção</option>
        <option value="lido">Lido</option>
        <option value="lendo">Lendo</option>
        <option value="quero ler">Quero ler</option>
      </select>
      <button type="submit">Editar</button>
      <button onClick={() => setEdit(null)}>Cancelar</button>
    </form>
  );
};

export default EditForm;
