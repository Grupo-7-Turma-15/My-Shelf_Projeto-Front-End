import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const Favourites = () => {
  const { books } = useContext(UserContext);

  return (
    <div>
      <h1>Favoritos</h1>
    </div>
  );
};

export default Favourites;
