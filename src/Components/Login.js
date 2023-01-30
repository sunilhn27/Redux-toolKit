import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user';

function Login() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    return (
        <div>
            <input placeholder='name' onChange={(e) => setName(e.target.value)} />
            <input placeholder='Age' onChange={(e) => setAge(e.target.value)} />
            <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

            <hr></hr>
            <button onClick={() => dispatch(login({
                name,
                age,
                email
            }))}>Update</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default Login
