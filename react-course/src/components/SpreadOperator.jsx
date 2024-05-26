import React from 'react'

const SpreadOperator = () => {

    const wildAnimals=["Lion", "Wolf", "Tiger"]
    const domesticAnimals=["Dog", "Cat", "Hamster"]

    const animals=[...wildAnimals, ...domesticAnimals]

    console.log(animals)

    const europeanModels={
        Italy: "Dina",
        France: "Cristine",
        Spain: "Carmen"
    }

    const africanModels={
        Senegal: "Sonia",
        Sudafrica: "Carmele",
        Sudan: "Sandra"
    }

    const models={...europeanModels, ...africanModels}

    console.log(models)
    return (
        <>
            
        </>
    )
}

export default SpreadOperator