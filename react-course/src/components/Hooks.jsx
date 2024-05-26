import React, {useState, useEffect} from 'react'

const Hooks = () => {

    const [color, setColor]=useState("yellow")
    const [counter, setCounter]=useState(0)

    useEffect(()=>{
        let interval=setInterval(()=>{setCounter(counter + 1)}, 1000)

        return ()=>{
            clearInterval(interval)
        }
    }, [counter])

    const background={
        widht: "100%",
        height: "1000px",
        backgroundColor: color
    }

    const changeColor=()=>{
        if (color === "yellow")
            setColor("blue")
        else
            setColor("yellow")
    }

    return (
        <>
            <div style={background} className="conteiner">
                <button onClick={changeColor}>Change Color</button>
                <h1>Counter: {counter}</h1>
            </div>
        </>
    )
}

export default Hooks