import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import User from './User'
import Profile from './Profile';

export default function UserList() {
    const [userList, setUserList] = useState()
    useEffect(() => {
        Axios.get('/api/auth/user-list').then(response => {
            setUserList(response.data)
        });
    }, [])
    return (
        <div className="chat-user">
            <Profile />
            {
                userList ?
                    <div className="user-list">
                        {
                            userList.map(item => (
                                <User key={item.id} user={item} />
                            ))
                        }
                    </div> :
                    null
            }
        </div>
    )
}
