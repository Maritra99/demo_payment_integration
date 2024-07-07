import React,{useState} from "react" 


const Demo = () => {
    const [userid, setUserid] = useState("")
    const [userpass, setUserpass] = useState("")
    const [useriderr, setUseriderr] = useState(false)
    const [userpasserr, setUserPasserr] = useState(false)

    const Login = (e) => {
        e.preventDefault();

    }

    const UseridHandler = (e) => {
        let item = e.target.value.length
        if (item < 6) {
            setUseriderr(true)
        }
        else {
            setUseriderr(false)
        }
        //console.warn(item)
    }

    const UserpassHandler = (e) => {
        let item = e.target.value.length
        if (item < 6) {
            setUseriderr(true)
        }
        else {
            setUseriderr(false)
        }
        //console.warn(item)
    }


    return (
        <>
            <form onSubmit={Login}>
                <h1 >Login</h1>
                <div>
                    <input type='text' placeholder='Enter username' onChange={UseridHandler}></input><br />
                    {useriderr ? <span>UserId Must Be of Six Caracter</span> : null}<br />
                </div>
                
                <div>
                    <input type='text' placeholder='Enter password' onChange={UserpassHandler}></input><br /><br />
                    {userpasserr ? <span>UserId Must Be of Six Caracter</span> : null}<br />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}


export default Demo;