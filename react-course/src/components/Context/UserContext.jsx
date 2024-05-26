import { createContext, useState, useEffect } from "react";
import axios from "axios";

//Creating Context

export const UserContext=createContext()

// Creating Provider
const UserProvider=(props)=>{

    const [users, setUsers]=useState([])

    useEffect(()=>{
        const getUsers=async()=>{
            const url = "https://jsonplaceholder.typicode.com/users"
            const res = await axios.get(url)
            setUsers(res.data)
        }
        getUsers()
    }, [])
    return (
        <UserContext.Provider value={{users}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider