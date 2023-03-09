import { IBooks } from "../UserContext/@types";

export interface IBookChildren {
    children: React.ReactNode;
  }
  
  export interface IBookContext {
    view: IBooks | null;
    setView: React.Dispatch<React.SetStateAction<IBooks | null>>;
    titleCreate: (formData: IBooks) => Promise<void>;
    titleGet: (title_id: number) => Promise<void>;
    titleEdit: (formData: IBooks) => Promise<void>;
    titleDelete: (title_id: number) => Promise<void>;
  }