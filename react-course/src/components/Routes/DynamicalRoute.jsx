import React from 'react'
import { useParams } from 'react-router-dom';

const DynamicalRoute = () => {
    const { id } = useParams();
    
    console.log(useParams())

    return (
        <>
            <h1>Your id user is: {id}</h1>
        </>
    )
}

export default DynamicalRoute