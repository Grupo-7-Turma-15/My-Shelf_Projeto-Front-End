import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import homeImg from "../../assets/underConstruction/homeImage.png";
import { StyledHome } from "./styled";

const Home = () => {
  const { books } = useContext(UserContext);

  return (
    <StyledHome>
      <h3>Não se esqueça de adicionar a pagina em que parou!</h3>
      <img
        src={homeImg}
        alt="bustor de pedra entre livros fazendo referencia a O Iluminado falando que lembra em que pagina você parou"
      />
    </StyledHome>
  );
};

export default Home;
