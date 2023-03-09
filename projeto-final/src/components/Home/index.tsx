import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const Home = () => {
  const { books } = useContext(UserContext);

  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
