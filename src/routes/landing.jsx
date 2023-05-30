import React from 'react';
import Topbar from '../components/layout/Topbar';
import Navbar from '../components/layout/Navbar';
import Header from '../components/Header';
import ArrowDropUp from '../assets/icons/ArrowDropUp';
import BtnContained from '../components/buttons/BtnContained';




const Landing = () => {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <Header/>
            <BtnContained iconButton><ArrowDropUp/></BtnContained>

        </div>
    );
};

export default Landing;