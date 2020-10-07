import React, { useContext } from 'react'
import Login from './Login'
import ChatPanel from './ChatPanel'
import { UserContext } from '../contexts/UserContext';

export default function HomePage() {
    const { userInformation } = useContext(UserContext)
    return (
        <div>
            {
                !userInformation ?
                <Login />:
                <ChatPanel />
            }
        </div>
    )
}
