import React, {createRef} from "react";

const Refs = () => {

    const changeColor=createRef()

    const changeColorText=()=>{
        changeColor.current.style.color="blue"
    }

    return (
        <>
            <h1 ref={changeColor}>Title changing color</h1>
            <button onClick={changeColorText}>Change Color</button>
        </>
    )
}

export default Refs