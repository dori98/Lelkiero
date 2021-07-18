import React, {useState} from 'react'
import {Link} from 'gatsby'
import * as style from "../css/style.module.css"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toLink = () => {
        setIsOpen(false)
    }
    return(
        <section className={style.navbarTitleAndLinks}>
            <h1 className={style.navbarTitle}>Lelkierő</h1>
            <div className={style.navbarLinks}>
                <a href="#bemutatkozas">Főoldal</a>
                <a href="#arak">Árak</a>
                <a href="#idoponkeres">Időpontkérés</a>
                <a href="#elerhetoseg">Elérhetőség</a>
                <a href="#videok">Videók</a>
                <a href="#ajanlottirodalom">Ajánlott irodalom</a>

            </div>


        </section>

    )
}
export default Navbar
