import React, {useEffect, useState} from 'react'
import * as style from "../css/style.module.css"
import {Link} from "gatsby";


const Navbar = () => {

    const [scrollDir, setScrollDir] = useState("")

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
        <navbar className={style.navbarWrapper} id="headerNavigation">
            <h1 className={style.navbarTitle}>Lelkierő</h1>
            <div className={style.navbarLinks}>
                <div className={style.menuItem}>
                    <Link to="#bemutatkozas"><h2 className={style.menuLink}>Bemutatkozás</h2></Link>
                </div>
                <div className={style.menuItem}>
                    <Link to="#arak"><h2 className={style.menuLink}>Árak</h2></Link>
                </div>
                <div className={style.menuItem}>
                    <Link to="#idoponkeres"><h2 className={style.menuLink}>Időpontkérés</h2></Link>
                </div>

                <div className={style.menuItem}>
                    <Link to="#videok"><h2 className={style.menuLink}>Videók</h2></Link>
                </div>
                <div className={style.menuItem}>
                    <Link to="#ajanlottirodalom"><h2 className={style.menuLink}>Ajánlott irodalom</h2></Link>
                </div>
                <div className={style.menuItem}>
                    <Link to="#elerhetoseg"><h2 className={style.menuLink}>Elérhetőség</h2></Link>
                </div>
            </div>
        </navbar>

    )
}
export default Navbar
