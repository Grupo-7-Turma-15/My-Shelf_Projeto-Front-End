import React, { useContext } from "react";
import { BookContext } from "../../../providers/BookContext";
import { UserContext } from "../../../providers/UserContext";
import { IBooks } from "../../../providers/UserContext/@types";
import { StyledCard } from "./style";

const CollectionCard = (book: IBooks) => {
  const { view, setView, titleDelete, setEdit } = useContext(BookContext);
  const { books, setBooks } = useContext(UserContext);

  function bookDelete(id: number) {
    titleDelete(id);
    setView(null);
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  }

  function bookEdit() {
    setEdit(view);
    setView(null);
  }

  return (
    <StyledCard>
      <div className="modal">
        <div className="headerModal">
          <h2>{book.title}</h2>
          <span className="closeBtn" onClick={() => setView(null)}>
            x
          </span>
        </div>
        <div>
          <img src={book.cover} alt={book.title} />
        </div>
        <p className="synopsis">{book.synopsis}</p>
        <section>
          <div>
            <h4>Author:</h4>
            <span>{book.author}</span>
          </div>
          <div>
            <h4>Tipo:</h4>
            <span>{book.type}</span>
          </div>
          <div>
            <h4>Aonde parou:</h4>
            <span>{book.stopped_at}</span>
          </div>
        </section>
        <div className="divBtnsModal">
          <button className="editBtn" onClick={() => bookEdit()}>
            Editar
          </button>
          <button className="deleteBtn" onClick={() => bookDelete(book.id)}>
            Remover
          </button>
        </div>
      </div>
    </StyledCard>
  );
};

export default CollectionCard;
