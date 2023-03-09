import React, { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'

export default function Dashboard() {
    const {userLogout} = useContext(UserContext)
    return (
        <div>
            <button onClick={()=>userLogout()}>Logout</button>
        </div>
    )
}
