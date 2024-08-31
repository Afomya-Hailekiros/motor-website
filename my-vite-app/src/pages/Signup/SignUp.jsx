import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3005/register', { email, username, password, role: 'user' }) // Adjust role here if needed
            .then(() => {
                alert('Registration Successful');
                setEmail('');
                setUsername('');
                setPassword('');
                navigate('/login');
            })
            .catch((error) => {
                console.log('Unable to register user');
            });
    };

    return (
        <div className="min-h-[600px] w-full flex justify-center mt--30 items-center bg-gradient-to-r from-black to-white-500">
            <div className='w-[50%] h-[100%] text-white flex justify-center items-center'>
                <img
                    src="/src/assets/realmotor.png"
                    alt="Motors"
                    className="w-full max-w-lg h-auto object-contain mb-4 md:mb-0 md:w-auto order-1 md:order-2"
                />
                <div className=''>
                    <h1 className="md:text-3xl text-center gap-4 p-2 text-slate-400">Sign Up</h1>
                    <form className='text-center border w-[600px] h-[440px] p-20'
                        onSubmit={handleSubmit}
                    >
                        <label>Email</label>
                        <br />
                        <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                            type='text'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <br />
                        <label>Username</label>
                        <br />
                        <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                        <br />
                        <br />
                        <label>Password</label>
                        <br />
                        <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <br />
                        <button className='w-[200px] h-[50px] border hover:bg-teal-900'
                            type='submit'>Sign Up</button>
                        <p className='register-link p-5 text-orange-600'>
                            Already have an account? <Link to={'/login'}>Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
