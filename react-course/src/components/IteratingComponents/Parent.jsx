import React from 'react'
import Child from './Child'

const Parent = () => {

    const names=["Pedro", "Jose", "Luis"]

    return (
        <>
            {names.map(name=>(
                <Child nameList={name}/>
            ))}
        </>
    )
}

export default Parent