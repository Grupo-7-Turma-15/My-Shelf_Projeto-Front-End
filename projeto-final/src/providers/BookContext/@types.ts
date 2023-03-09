export interface IBookChildren {
    children: React.ReactNode;
  }
  
  export interface IBooks {
    id?:number;
    userId?: number;
    title: string;
    type?: string;
    cover?: string;
    synopsis?: string;
    author?: string;
    stopped_at?:string;
    status?: "lido" | "lendo" | "quero ler"
  }
  

  
  export interface IBookContext {
    books: IBooks[];
    setBooks: React.Dispatch<React.SetStateAction<IBooks[]>>;
    view: IBooks | null;
    setView: React.Dispatch<React.SetStateAction<IBooks | null>>;
    titleCreate: (formData: IBooks) => Promise<void>;
    titleGet: (title_id: number) => Promise<void>;
    titleEdit: (formData: IBooks) => Promise<void>;
    titleDelete: (title_id: number) => Promise<void>;
  }