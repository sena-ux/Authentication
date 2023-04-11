import React from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
    const { users } = useSelector((state) => state.auth)
    return (
        <div>
            <h1 className='title'>Dashboard</h1>
            <h2 className='subtitle'>Welcome Back <strong>{users && users.name}</strong></h2>
        </div>
    )
}

export default Welcome;