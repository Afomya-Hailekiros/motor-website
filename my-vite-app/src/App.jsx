import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import Card from './pages/Card/Card';
import Cart from './pages/Cart/Cart';
import Footer from './pages/Footer/Footer';
import { OrderProvider } from './pages/Context/OrderContext';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import Products from './pages/Products/Products';

const App = () => {
    const [uploads, setUploads] = useState([]);
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);

    useEffect(() => {
        // Check if the user is signed in based on token existence
        const token = localStorage.getItem('token');
        if (token) {
            setIsUserSignedIn(true);
        }

        // Retrieve uploads from localStorage on component mount
        const savedUploads = JSON.parse(localStorage.getItem('uploads')) || [];
        setUploads(savedUploads);
    }, []);

    const addUpload = (newUpload) => {
        setUploads((prevUploads) => {
            const updatedUploads = [...prevUploads, newUpload];
            localStorage.setItem('uploads', JSON.stringify(updatedUploads));
            return updatedUploads;
        });
    };

    return (
        <OrderProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route 
                        path="/products" 
                        element={isUserSignedIn ? <Products addUpload={addUpload} /> : <Login />}
                    />
                    {/* Redirect to login if not signed in */}
                    <Route path="*" element={<Login />} />
                </Routes>

                <Card uploads={uploads} /> {/* Pass uploads state as a prop */}
                <Footer />
            </Router>
        </OrderProvider>
    );
};

export default App;
