import React, { useContext, useEffect } from 'react'
import { BookContext } from '../../providers/BookContext';
import { UserContext } from '../../providers/UserContext';

const Favourites = () => {
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

  const {userProfile} = useContext(UserContext)

 
  
  
  console.log(books);
  
  return (
        
        <div>
            <h1>Favoritos</h1>
            
            
        </div>
    )
}

export default Favourites
