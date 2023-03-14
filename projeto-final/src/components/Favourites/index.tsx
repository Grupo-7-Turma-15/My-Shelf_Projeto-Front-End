import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import dogConstruction from "../../assets/underConstruction/underConstruction.jpg";

const Favourites = () => {
  const { books } = useContext(UserContext);

  return (
    <div>
      <h1>Favoritos ainda estar em construção</h1>
      <h3>Em breve teremos novidades</h3>
      <img
        src={dogConstruction}
        alt="Cachorro avisando que essa parte do site estar em construção"
      />
    </div>
  );
};

export default Favourites;
