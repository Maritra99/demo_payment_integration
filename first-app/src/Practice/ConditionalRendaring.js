import React, { useState } from 'react'
import handleSubmit from './Form'

export default function ConditionalRendaring() {
    const [Loggedin, setloggedIn] = useState(3)
    return (
        <div>
            <div>
                {Loggedin ? <h1>Welcome User</h1> : <h1>Welcome Guest</h1>}
            </div>
            <div>
                {Loggedin == 1 ? <h1>Welcome User 1</h1> : Loggedin == 2 ? <h1>Welcome user 2</h1> : <h1>Welcome User 3</h1>}
            </div>
        </div>
    )
}
