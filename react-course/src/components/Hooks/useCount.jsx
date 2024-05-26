import React, {useState, useEffect} from "react";


export const useCount=(initialValue=0)=>{
    const[counter, setCounter]=useState(initialValue)
    useEffect(()=>{
        let interval=setInterval(()=>{setCounter(counter<20 ? counter + 1: null)}, 1000)

        return()=>{
            clearInterval(interval)
        }
    }, [counter])

    return[counter]
}