import React, {useEffect, useState} from 'react'
import * as style from "../css/style.module.css"
import {Link} from "gatsby";
import {AiOutlineMenu, FaTimes} from "react-icons/all";
import logo from '../assets/logo1.png'

const Navbar = (lang, setLang) => {
    console.log(lang.lang)
    const [scrollDir, setScrollDir] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    const toLink = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        const threshold = 5
        let lastScrollY = window.pageYOffset
        let ticking = false

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false
                return
            }
            setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up")
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false
        }

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir)
                ticking = true
            }
        }
        window.addEventListener("scroll", onScroll)
        if (scrollDir === "scrolling up") {
            //document.getElementById("headerNavigation").style.backgroundColor = "#083852"
            document.getElementById("headerNavigation").style.marginTop = "0px"
        } else if (scrollDir === "scrolling down") {
            document.getElementById("headerNavigation").style.marginTop = "-100px"
        }
        return () => window.removeEventListener("scroll", onScroll)

    }, [scrollDir]);

    return (
        <nav className={style.navbarWrapper} id="headerNavigation" >
            <div className={style.navbarLogoTitle}>
                <img src={logo} alt="logo" className={style.navbarLogo}/>
                <h1 className={style.navbarTitle}>Lelkierő</h1>
            </div>

            <div className={style.navbarLinks}>
                <div className={style.menuItem}>
                    <Link to="#bemutatkozas"><h2
                        className={style.menuLink}>{lang.lang === "HU" ? "Bemutatkozás" : "Missing"}</h2></Link>
                </div>
                <div className={style.menuItem}>
                    <Link to="#arak"><h2 className={style.menuLink}>{lang.lang === "HU" ? "Árak" : "Prices"}</h2></Link>
                </div>
                <div className={style.menuItem}>
                    <Link to="#idoponkeres"><h2
                        className={style.menuLink}>{lang.lang === "HU" ? "Időpontkérés" : "Appointment form"}</h2></Link>
                </div>

                <div className={style.menuItem}>
                    <Link to="#videok"><h2 className={style.menuLink}>{lang.lang === "HU" ? "Videók" : "Videos"}</h2></Link>
                </div>
                <div className={style.menuItem}>
                    <Link to="#ajanlottirodalom"><h2
                        className={style.menuLink}>{lang.lang === "HU" ? "Ajánlott irodalmak" : "Recommended literature"}</h2>
                    </Link>
                </div>
                <div className={style.menuItem}>
                    <Link to="#elerhetoseg"><h2
                        className={style.menuLink}>{lang.lang === "HU" ? "Elérhetőség" : "Contacts"}</h2></Link>
                </div>
                <div>
                    <button onClick={() => setLang()} className={style.menuButton}>HU</button>
                    |
                    <button onClick={() => setLang()} className={style.menuButton}>EN</button>
                </div>
            </div>
            <div className={style.navbarMenu}>
                <button className={style.navbarMenuButton} onClick={() => toggleSidebar()}>
                    <AiOutlineMenu/>
                </button>
                <div className={!isOpen ? `${style.dropdownContent}` : `${style.dropdownContent} ${style.openMenu}`}>
                    <button onClick={() => toggleSidebar()} className={style.closeButton}>
                        <FaTimes/>
                    </button>
                    <Link to="#bemutatkozas" onClick={() => toLink()}><h2
                        className={style.menuLink}>{lang.lang === "HU" ? "Bemutatkozás" : "Missing"}</h2></Link>
                    <Link to="#arak" onClick={() => toLink()}><h2
                        className={style.menuLink}>{lang.lang === "HU" ? "Árak" : "Prices"}</h2></Link>
                    <Link to="#idoponkeres" onClick={() => toLink()}><h2
                        className={style.menuLink}>{lang.lang === "HU" ? "Időpontkérés" : "Appointment form"}</h2></Link>
                    <Link to="#videok" onClick={() => toLink()}><h2
                        className={style.menuLink}>{lang.lang === "HU" ? "Videók" : "Videos"}</h2></Link>
                    <Link to="#ajanlottirodalom" onClick={() => toLink()}><h2
                        className={style.menuLink}>{lang.lang === "HU" ? "Ajánlott irodalmak" : "Recommended literature"}</h2>
                    </Link>
                    <Link to="#elerhetoseg" onClick={() => toLink()}><h2
                        className={style.menuLink}>{lang.lang === "HU" ? "Elérhetőség" : "Contacts"}</h2></Link>
                    <div>
                        <button onClick={() => setLang()} className={style.menuButton}>HU</button>
                        |
                        <button onClick={() => setLang()} className={style.menuButton}>EN</button>
                    </div>
                </div>
            </div>

        </nav>

    )
}
export default Navbar
