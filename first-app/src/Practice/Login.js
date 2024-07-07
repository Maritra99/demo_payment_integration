import React, { useState } from 'react'

export default function Login() {
    const [userid, setUserid] = useState("")
    const [userpass, setUserpass] = useState("")
    const [useriderr, setUseriderr] = useState(false)
    const [userpasserr, setUserpasserr] = useState(false)

    function Login(e) {
        //alert("hello")
        if(userid.length<6 || userpass.length<6)
        {
            alert("wrong ")
        }
        else
        {
            alert("All Good!!")
        }
        e.preventDefault()
    }


    function UseridHandler(e) {
        let item = e.target.value.length
        if (item < 6) {
            setUseriderr(true)
        }
        else {
            setUseriderr(false)
        }
        //console.warn(item)
        setUserid(item)
    }
    function UserpassHandler(e) {
        let item = e.target.value.length
        //console.log(e.target.value.length)
        if (item < 6) {
            setUserpasserr(true)
            //console.log("err true")
            setUserpass(item)
        }
        else {
            setUserpasserr(false)
            //console.log("err false")
        }
}


    return (
        <div>
            <form onSubmit={Login}>
                <h1 >Login</h1>
                <input type='text' placeholder='Enter username' onChange={UseridHandler}></input><br />
                {useriderr ? <span>UserId Must Be of Six Caracter</span> : null}<br />
                <input type='text' placeholder='Enter password' onChange={UserpassHandler}></input><br /><br />
                {userpasserr ? <span>Password Must Be of Six Caracter</span> : null}<br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
