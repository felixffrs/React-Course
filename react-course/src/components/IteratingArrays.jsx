import React from 'react'

const IteratingArrays = () => {

    const animals=["Duck", "Cat", "Dog"]
    const people=[
        {
            id: 1,
            name: "Jose",
            position: "Cleaner"
        },
        {
            id: 2,
            name: "Juan",
            position: "Developer"
        },
        {
            id: 3,
            name: "Pepe",
            position: "Lawyer"
        }
    ]
    return (
        <>
            <ul>
                {animals.map(animal=>(
                    <li>{animal}</li>
                ))}
            </ul>

            <ul>
                {people.map(person=>(
                    <li key={person.id}>
                        ID: {person.id} <br/>
                        Name: {person.name} <br/>
                        Position: {person.position} <br/>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default IteratingArrays