import React from 'react'

const ComponentComunication1 = (props) => {
    
    if (props.changeState === true) {
        console.log("The state is true")
    }

    const callParent=()=>{
        props.callParent()
    }

    const callBrother=()=>{
        props.callBrother()
    }

    return (
        <>
            <button onClick={callParent}>Call Parent From Child</button>
            <button onClick={callBrother}>Call Brother</button>
        </>
    )
}

export default ComponentComunication1