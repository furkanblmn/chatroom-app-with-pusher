import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export default function UserContextProvider(props) {
    const [userInformation, setUserInformation] = useState(JSON.parse(localStorage.getItem("user-information")))

    function createUserInf(data) {
        data.zaman = Date.now() + 43200000;
        localStorage.setItem('user-information', JSON.stringify(data));
        setUserInformation(JSON.parse(localStorage.getItem("user-information")))
    }
    function deleteUserInf(){
        localStorage.removeItem("user-information")
        setUserInformation(null)
    }
    return (
        <UserContext.Provider value={{ userInformation, createUserInf,deleteUserInf }}>
            {props.children}
        </UserContext.Provider>
    )
}
