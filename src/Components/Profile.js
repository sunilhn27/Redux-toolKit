import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {

    const user = useSelector((state) => state.user.value)

    return (
        <div>
            <p>Name :{user.name}</p>
            <p>age :{user.age}</p>
            <p>E-mail :{user.email}</p>
        </div>
    )
}

export default Profile
