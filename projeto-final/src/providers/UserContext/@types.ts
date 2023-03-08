export interface IUserChildren {
  children: React.ReactNode;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  img?: string;
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

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  userRegister: (formData: IFormRegister) => Promise<void>;
  userLogin: (formData: IFormLogin) => Promise<void>;
  userLogout: () => void;
  userProfile: () => Promise<void>;
  userEdit: (formData: IFormEdit) => Promise<void>;
}
