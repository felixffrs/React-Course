import React from 'react'

const IterateKeys = () => {

    const animal={
        name: "Coco",
        type: "Delfin",
        age: 5
    }

    const key=Object.keys(animal)

    return (
        <>
            <ul>
                {key.map(k=>(
                    <li>{k}: {animal[k]}</li>
                ))}
            </ul>
        </>
    )
}

export default IterateKeys