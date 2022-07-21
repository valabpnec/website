import React from "react";

import{
    Blog,
    Features,
    Footer,
    Header,
    Possibility,
    WhatVA
} from './containers';

import {
    Brand,
    CTA,
    Navbar
} from './components';

import './App.css';

const App = () => {
    return(
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatVA/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
};

export default App;