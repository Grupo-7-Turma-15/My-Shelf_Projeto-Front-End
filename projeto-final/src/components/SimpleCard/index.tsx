



import React, { useContext } from 'react'
import { BookContext } from '../../providers/BookContext'
import { IBooks } from '../../providers/UserContext/@types'
import { StyledSimpleCard } from './style'

const SimpleCard = (book:IBooks) => {
const {setView} = useContext(BookContext)

    return (
        <StyledSimpleCard>
            <button onClick={()=>setView(book)}>
                <div>
                    <img src={book.cover} alt={book.title} />
                </div>
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
            </button>
        </StyledSimpleCard>
    )
}

export default SimpleCard

