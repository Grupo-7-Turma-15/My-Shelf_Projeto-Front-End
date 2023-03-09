import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../server/Api";
import { IBooks } from "../UserContext/@types";
import {  IBookChildren, IBookContext } from "./@types";

export const BookContext = createContext({} as IBookContext);

export const BookProvider = ({ children }: IBookChildren) => {
  
  const [view, setView] = useState<IBooks | null>(null);

  const token = localStorage.getItem('@KenzieBooks:TOKEN');

  const titleCreate = async (formData: IBooks) => {
    try {
      const response = await api.post("/title", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // setBooks([...books, response.data]);
      toast.success("Livro criado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Tente novamente");
    }
  };

  const titleGet = async (title_id:number) => {
    try {
      const response = await api.get(`/title/${title_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setView(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const titleEdit = async (formData: IBooks) => {
    try {
      const response = await api.patch("/title", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setView(response.data);
      toast.success("Livro atualizado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Tente novamente");
    }
  };


  const titleDelete = async (title_id:number) => {
    try {
      const response = await api.delete(`/title/${title_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Livro deletado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };



  return <BookContext.Provider value={{view,setView, titleCreate, titleGet, titleEdit, titleDelete}}>{children}</BookContext.Provider>;
};
