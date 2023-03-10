import { IBookFormCreate } from "../../components/Collection/CreateForm";
import { IBookFormEdit } from "../../components/Collection/EditForm";
import { IBooks } from "../UserContext/@types";

export interface IBookChildren {
  children: React.ReactNode;
}

export interface IBookContext {
  view: IBooks | null;
  setView: React.Dispatch<React.SetStateAction<IBooks | null>>;
  titleCreate: (formData: IBookFormCreate) => Promise<void>;
  titleGet: (title_id: number) => Promise<void>;
  titleEdit: (title_id: number, formData: IBookFormEdit) => Promise<void>;
  titleDelete: (title_id: number) => Promise<void>;
  edit: IBooks | null;
  setEdit: React.Dispatch<React.SetStateAction<IBooks | null>>;
  create: boolean;
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
}
