import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { navigate } from "gatsby"
const Layout = ({children,lang}) => {


    function setLang(){
        if(window.location.pathname === "/"){
            navigate("/en/" + window.location.hash)
        }
        else if(window.location.pathname === "/en/"){
            navigate("/" + window.location.hash)

        }
    }
    return (
        <>
            <Navbar lang={lang} setLang={() => setLang()}/>
            {children}
            <Footer/>
        </>
    )
}
export default Layout
