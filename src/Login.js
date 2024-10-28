import React, { useState, useContext } from 'react';
import { UserContext } from './utils/UserContext';

export default function Login(props) {
    const { setUser } = useContext(UserContext);
    
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({
            "FORM DATA": formData
        })
        // Call Context State callback
        setUser(formData)
    }

    return (
        <div className='h-screen w-full flex items-center justify-center bg-slate-300'>
            <div className='w-[450px] p-8 bg-white rounded-lg'>
                <h1 className='mb-8 text-center uppercase font-bold text-4xl'>Login</h1>
                <form method='post' onSubmit={handleFormSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='username' className='block font-bold mb-1'>Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder='Enter username'
                            className='h-[45px] w-full rounded-md border border-black p-3' />
                    </div>

                    <div className='mb-5'>
                        <label htmlFor='password' className='block font-bold mb-1'>Password</label>
                        <input
                            type="text"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter password'
                            className='h-[45px] w-full rounded-md border border-black p-3' />
                    </div>

                    <div className=''>
                        <button className='bg-black text-white h-[50px] w-full rounded-md border border-black p-3 flex items-center justify-center text-lg'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}