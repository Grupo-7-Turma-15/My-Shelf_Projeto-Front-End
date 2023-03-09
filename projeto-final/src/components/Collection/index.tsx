import React, { useContext, useEffect } from "react";
import { BookContext } from "../../providers/BookContext";
import { UserContext } from "../../providers/UserContext";
import SimpleCard from "../SimpleCard";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  const { books } = useContext(UserContext);

  const { view, setView, titleCreate, titleGet, titleEdit, titleDelete } =
    useContext(BookContext);

  console.log(books);

  return (
    <div>
      <h1>Coleção</h1>
      <ul>
        {books.map((book) => (
          <SimpleCard
            key={book.id}
            title={book.title}
            cover={book.cover}
            author={book.author}
            id={book.id}
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
    </div>
  );
};

export default Collection;


