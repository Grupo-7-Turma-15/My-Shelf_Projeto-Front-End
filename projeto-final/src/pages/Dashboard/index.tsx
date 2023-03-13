import React, { useContext, useEffect, useState } from "react";
import Collection from "../../components/Collection";
import Favourites from "../../components/Favourites";
import Home from "../../components/Home";
import { UserContext } from "../../providers/UserContext";
import { StyledDashboard } from "./style";
import { NavAside } from "../../components/NavAside/styled";
import colectionIcon from "../../assets/colection.svg";
import dashboardIcon from "../../assets/dashboard.svg";
import favoIcon from "../../assets/favoritos.svg";
import logoutIcon from "../../assets/logout.svg";

export default function Dashboard() {
  const [page, setPage] = useState("home");
  const { update, userLogout, books, userProfile } = useContext(UserContext);

  useEffect(() => {
    userProfile();
  }, [page]);

  useEffect(() => {
    userProfile();
  }, [update]);

  return (
    <StyledDashboard>
      <header>
        <div>
          <span className="colorBlue">My</span>
          <span>Shelf.</span>
        </div>
        <div className="iconBtn" onClick={() => userLogout()}>
          <img src={logoutIcon} />
          <span>Logout</span>
        </div>
      </header>
      <main>
        <NavAside page={page}>
          <div className="iconBtn home" onClick={() => setPage("home")}>
            <img src={colectionIcon} />
            <span>Home</span>
          </div>
          <div
            className="iconBtn collection"
            onClick={() => setPage("collection")}
          >
            <img src={dashboardIcon} />
            <span>Coleção</span>
          </div>
          <div
            className="iconBtn favourites"
            onClick={() => setPage("favourites")}
          >
            <img src={favoIcon} />
            <span>Favoritos</span>
          </div>
        </NavAside>
        <div>
          {page == "home" ? <Home /> : null}
          {page == "collection" ? <Collection /> : null}
          {page == "favourites" ? <Favourites /> : null}
        </div>
      </main>
    </StyledDashboard>
  );
}
