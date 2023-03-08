import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../server/Api";
import { BookContext } from "../BookContext";
import {
  IUserContext,
  IUserChildren,
  IUser,
  IFormRegister,
  IFormLogin,
  IFormEdit,
} from "./@types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserChildren) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const {setBooks} = useContext(BookContext)

  const token = localStorage.getItem('@KenzieBooks:TOKEN');
  const userId = (localStorage.getItem('@KenzieBooks:ID'));

  const userRegister = async (formData: IFormRegister) => {
    try {
      const response = await api.post("/users", formData);
      setUser(response.data.user);
      localStorage.setItem("@KenzieBooks:TOKEN", response.data.accessToken);
      localStorage.setItem("@KenzieBooks:ID", response.data.user.id);
      toast.success("Cadastro com sucesso");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Tente novamente");
    }
  };

  const userLogin = async (formData: IFormLogin) => {
    try {
      const response = await api.post("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@KenzieBooks:TOKEN", response.data.accessToken);
      localStorage.setItem("@KenzieBooks:ID", response.data.user.id);
      toast.success("Login com sucesso");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Tente novamente");
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@KenzieBooks:TOKEN");
    localStorage.removeItem("@KenzieBooks:ID");
    navigate("/");
  };

  const userProfile = async () =>{
    try {
        const response = await api.get(`/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        setBooks(response.data.title)
    } catch (error) {
        console.log(error);
    }
  }

  const userEdit = async (formData:IFormEdit) =>{
    try {
        const response = await api.patch(`/users/${userId}`, formData);
        setUser(response.data)
        toast.success("Usuário editado com sucesso");
        navigate("/dashboard");
    } catch (error) {
        console.log(error);
        toast.error("Tente novamente");
    }
  }
  return (
    <UserContext.Provider value={{ user, setUser, userLogin, userLogout, userRegister, userProfile, userEdit }}>
      {children}
    </UserContext.Provider>
  );
};
