import React, {useState} from 'react'

const RenderConditional = () => {
    const [name, setName]=useState(null)
    const [lastname, setLastname]=useState(null)
    const [email, setEmail]=useState(null)
    const [password, setPassword]=useState(null)

    const nameRegex=/([a-zA-Z0-9_\s]+)/
    const lastnameRegex=/([a-zA-Z0-9_\s]+)/
    const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passwordRegex=/([a-zA-Z0-9_\s]+)/

    const nameValue=(name)=>{
        if (name.trim()) {
            if (nameRegex.test(name)) {
                setName(true)
            } else {
                setName(false)
            }
        }
    }

    const lastnameValue=(lastname)=>{
        if (lastname.trim()) {
            if (lastnameRegex.test(lastname)) {
                setLastname(true)
            } else {
                setLastname(false)
            }
        }
    }

    const emailValue=(email)=>{
        if (email.trim()) {
            if (emailRegex.test(email)) {
                setEmail(true)
            } else {
                setEmail(false)
            }
        }
    }

    const passwordValue=(password)=>{
        if (password.trim()) {
            if (passwordRegex.test(password)) {
                setPassword(true)
            } else {
                setPassword(false)
            }
        }
    }

    const send=(e)=>{
        e.preventDefault()
        if(name===true &&
            lastname===true &&
            email===true &&
            password===true) {
                console.log("Form validated correctly")
            } else {
                console.log(`Send correct data in the form name=${name}, lastname=${lastname}, email=${email}, password=${password}`)
            }
        setTimeout(()=>{
            window.location.reload()
        }, 5000)
    }

    return (
        <>
            <form onSubmit={e=>send(e)}>
                <h3>Write Name</h3>
                    {
                        name===false ? <h4>Write the name correctly</h4>: null
                    }
                    <input type="text" onChange={e=>nameValue(e.target.value)}/>
                <h3>Write LastName</h3>
                    <input type="text" onChange={e=>lastnameValue(e.target.value)}/>
                <h3>Write Email</h3>
                    <input type="email" onChange={e=>emailValue(e.target.value)}/>
                <h3>Write Password</h3>
                    <input type="password" onChange={e=>passwordValue(e.target.value)}/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default RenderConditional