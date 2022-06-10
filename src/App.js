import React from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
import MainSection from "./components/MainSection";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";
import './styles/_index.scss'

const containerStyles = {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0px 40px 0px 40px',
    overflow: 'hidden'
}


const App = () => {
    return (
        <div style={containerStyles}>
            <Header/>
            <Main/>
            <Footer />
        </div>
    )
}

export default App