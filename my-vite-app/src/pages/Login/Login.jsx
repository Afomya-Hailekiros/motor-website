import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3005/login', { username, password });
            const { token, role } = response.data;  // Extract role from the response
            alert('Login successful');
            localStorage.setItem('token', token);
            setUsername('');
            setPassword('');

            // Navigate based on the user role
            if (role === 'admin') {
                navigate('/products');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.log('Login Error', error);
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="min-h-[600px] w-full flex justify-center items-center bg-gradient-to-r from-black to-white-500">
            <div className='w-[50%] h-[100%] text-white flex justify-center items-center'>
                <img
                    src="/src/assets/realmotor.png"
                    alt="Motors"
                    className="w-full max-w-lg h-auto object-contain mb-4 md:mb-0 md:w-auto order-1 md:order-2"
                />
                <div>
                    <h1 className="md:text-3xl text-center gap-4 p-2 text-slate-400">Log In</h1>
                    <form className='text-center border w-[600px] h-[410px] p-20' onSubmit={handleLogin}>
                        <label>Username</label>
                        <br />
                        <input
                            className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <br />
                        <br />
                        <label>Password</label>
                        <br />
                        <input
                            className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br />
                        <br />
                        <button className='w-[200px] h-[50px] border hover:bg-teal-900' type='submit'>
                            Login
                        </button>
                        <p className='register-link p-5 text-orange-600'>
                            Not registered? <Link to={'/register'}>Register here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
