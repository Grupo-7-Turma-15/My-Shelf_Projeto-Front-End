import React, { useContext, useEffect } from "react";
import { BookContext } from "../../providers/BookContext";
import { UserContext } from "../../providers/UserContext";


const Collection = () => {
const {books} = useContext(UserContext)

  const {
    view,
    setView,
    titleCreate,
    titleGet,
    titleEdit,
    titleDelete,
  } = useContext(BookContext);

  
console.log(books);

  return (
    <div>
      <h1>Coleção</h1>
    </div>
  );
};

export default Collection;
