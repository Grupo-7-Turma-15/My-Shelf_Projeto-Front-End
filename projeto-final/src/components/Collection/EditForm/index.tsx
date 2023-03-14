import React, { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BookContext } from "../../../providers/BookContext";
import { UserContext } from "../../../providers/UserContext";
import Input from "../../InputDefault";
import { StyledEditForm } from "./style";

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

  const { update, setUpdate } = useContext(UserContext);

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

    setUpdate(!update);
    setEdit(null);
  };

  return (
    <StyledEditForm>
      <form className="modal" onSubmit={handleSubmit(submit)}>
        <Input
          label="Titulo"
          register={register("title")}
          className={"input"}
        />
        <Input
          label="Sinopse"
          register={register("synopsis")}
          className={"input"}
        />
        <Input label="Capa" register={register("cover")} className={"input"} />
        <Input
          label="Autor"
          register={register("author")}
          className={"input"}
        />
        <Input label="Tipo" register={register("type")} className={"input"} />
        <Input
          label="Onde parei"
          register={register("stopped_at")}
          className={"input"}
        />
        <select {...register("status")}>
          <option value="lido">Lido</option>
          <option value="lendo">Lendo</option>
          <option value="quero ler">Quero ler</option>
        </select>
        <div className="aligneBtn">
          <button className="editBtn" type="submit">
            Editar
          </button>
          <button className="cancelBtn" onClick={() => setEdit(null)}>
            Cancelar
          </button>
        </div>
      </form>
    </StyledEditForm>
  );
};

export default EditForm;
