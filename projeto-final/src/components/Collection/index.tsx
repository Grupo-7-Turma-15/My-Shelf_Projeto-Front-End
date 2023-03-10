import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../providers/BookContext";
import { UserContext } from "../../providers/UserContext";
import { IBooks } from "../../providers/UserContext/@types";
import SimpleCard from "../SimpleCard";
import CollectionCard from "./CollectionCard";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";

const Collection = () => {
  const { books } = useContext(UserContext);

  const { view, edit, setCreate, create } =
    useContext(BookContext);


  return (
    <div>
      <h1>Coleção</h1>
      <div>
        <h3>Criar título</h3>
        <button onClick={()=>setCreate(true)}>+</button>
      </div>
      {create?(<CreateForm/>):null}
      <ul>
        {books.map((book) => (
          <SimpleCard
            key={book.id}
            title={book.title}
            cover={book.cover}
            author={book.author}
            id={book.id}
            type={book.type}
            synopsis={book.synopsis}
            stopped_at={book.stopped_at}
            status={book.status}
          />
        ))}
      </ul>

      {view ? (
        <CollectionCard
          key={view.id}
          title={view.title}
          type={view.type}
          cover={view.cover}
          synopsis={view.synopsis}
          author={view.author}
          stopped_at={view.stopped_at}
          id={view.id}
        />
      ) : null}

      {edit?(<EditForm/>):null}
    </div>
  );

  

  
};

export default Collection;


