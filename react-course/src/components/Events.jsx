import React from 'react'

/*
    onFocus(when a input is activate or in focus or is selected)
    onBlur(when we click outside of the input that is in focus)
    onChange(When there is a change in the component or input)
    onClick(When the element is clicked)
    onDoubleClick(When the element is clicked 2 times)
    onKeyDown(When any key is clicked)
    onKeyPress(When any key of the keyboard is clicked) ###Deprecated
    onMouseDown(When mouse is down of the element)
    onMouseOver(When mouse is top of the element)
    onMouseLeave(When mouse is left of the element)
 */

const focus=()=>console.log("I'm in focus")
const blur=()=>console.log("I'm not in focus")
const change=()=>console.log("I have changed")
const click=()=>console.log("Button clicked")
const doubleClick=()=>alert("Button clicked 2 times")
const clickKey=()=>console.log("Key clicked")

const Events = () => {
    return (
        <>
            <form >
                <input 
                    onFocus={focus} 
                    onBlur={blur} type="text"
                    onChange={change}
                    onKeyDown={clickKey}
                />
            </form>
            <button 
                onClick={click}
                onDoubleClick={doubleClick}
            >Click Here</button>

        </>
    )
}

export default Events