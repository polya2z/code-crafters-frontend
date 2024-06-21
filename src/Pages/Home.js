import React from 'react'
import Header from '../components/Header';
import Signup from '../components/Signup';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import About from '../components/About';
import React, { useEffect } from 'react';

function Home() {
     useEffect(() => {
        window.location.href = "https://fgpcodecrafters.site/";
    }, []);
    return (
        <>
        <p>
      Redirecting To - https://fgpcodecrafters.site/ </p>
        </>
    )
}

export default Home
