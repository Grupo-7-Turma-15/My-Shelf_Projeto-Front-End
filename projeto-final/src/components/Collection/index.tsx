import React, { useContext, useEffect } from "react";
import { BookContext } from "../../providers/BookContext";
import { UserContext } from "../../providers/UserContext";
import { api } from "../../server/Api";

const Collection = () => {
  const {
    books,
    setBooks,
    view,
    setView,
    titleCreate,
    titleGet,
    titleEdit,
    titleDelete,
  } = useContext(BookContext);

  useEffect(() => {
    const token = localStorage.getItem("@KenzieBooks:TOKEN");
    const userId = localStorage.getItem("@KenzieBooks:ID");
    const userProfile = async () => {
      if (token) {
        try {
          const response = await api.get(`/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setBooks(response.data.title);
          console.log(response.data);
          
        } catch (error) {
          console.log(error);
        }
      }
    };
    
  }, []);




  return (
    <div>
      <h1>Coleção</h1>
    </div>
  );
};

export default Collection;
