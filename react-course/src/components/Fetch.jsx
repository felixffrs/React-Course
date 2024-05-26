import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [users, setUsers]=useState([])

    useEffect(()=>{
        const chargeUsers=async()=>{
            const res=await fetch("https://jsonplaceholder.typicode.com/users")
            const data=await res.json()
            setUsers(data)
            console.log(data)
        }
        chargeUsers()
    }, [])
    return (
        <>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        Name: {user.name} <br/>
                        Lastname: {user.username} <br/>
                        Email: {user.email} <br/>
                        Phone: {user.phone} <br/>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Fetch