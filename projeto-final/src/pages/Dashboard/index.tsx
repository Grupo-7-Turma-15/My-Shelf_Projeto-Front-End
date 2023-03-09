import React, { useContext, useState } from "react";
import Collection from "../../components/Collection";
import Favourites from "../../components/Favourites";
import Home from "../../components/Home";
import { BookContext } from "../../providers/BookContext";
import { UserContext } from "../../providers/UserContext";

export default function Dashboard() {
  const [page, setPage] = useState("home");
  const { user, userLogout } = useContext(UserContext);
  const {
    books,
    view,
    setView,
    titleCreate,
    titleGet,
    titleEdit,
    titleDelete,
  } = useContext(BookContext);
  return (
    <div>
      <header>
        <button onClick={() => userLogout()}>Logout</button>
      </header>
      <main>
        <aside>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("collection")}>Coleção</button>
          <button onClick={() => setPage("favourites")}>Favoritos</button>
        </aside>
        <div>
          {page == "home" ? <Home /> : null}
          {page == "collection" ? <Collection /> : null}
          {page == "favourites" ? <Favourites /> : null}
        </div>
      </main>
    </div>
  );
}
