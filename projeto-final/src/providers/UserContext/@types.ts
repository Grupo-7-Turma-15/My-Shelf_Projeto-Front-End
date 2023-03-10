export interface IUserChildren {
  children: React.ReactNode;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  img?: string;
  titles?: IBooks[];
}

export interface IFormRegister {
  name: string;
  password: string;
  email: string;
  img?: string;
}

export interface IFormLogin {
  password: string;
  email: string;
}

export interface IFormEdit {
  name?: string;
  email?: string;
  img?: string;
}

export interface IBooks {
  id: number;
  userId?: number;
  title: string;
  type?: string;
  cover?: string;
  synopsis?: string;
  author?: string;
  stopped_at?: string;
  status?: "lido" | "lendo" | "quero ler";
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  books: IBooks[];
  setBooks: React.Dispatch<React.SetStateAction<IBooks[]>>;
  userRegister: (formData: IFormRegister) => Promise<void>;
  userLogin: (formData: IFormLogin) => Promise<void>;
  userLogout: () => void;
  userProfile: () => Promise<void>;
  userEdit: (formData: IFormEdit) => Promise<void>;
  goToRegister: () => void;
  goToLogin: () => void;
}
