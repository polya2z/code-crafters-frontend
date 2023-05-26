import React from 'react'
import Header from '../components/Header';
import Signup from '../components/Signup';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import About from '../components/About';

function Home() {
    return (
        <>
            <Header />
            {/* <h1 class="title-font sm:text-4xl text-3xl text-center my-5 font-medium text-purple-700">Our Top Performers...    </h1>
            <img alt='hgf' src='/Toppers.jpg'/> */}
            <About />
            <Signup />
            <Contact />
            <Footer />
        </>
    )
}

export default Home