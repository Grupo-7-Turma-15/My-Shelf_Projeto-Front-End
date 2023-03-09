import React, { useContext } from 'react'
import { BookContext } from '../../providers/BookContext';

const Home = () => {
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
      
    return (
        <div>
            <h1>home</h1>
        </div>
    )
}

export default Home
