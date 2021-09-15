import React from 'react'
import adatv from '../assets/logo1.png'

import * as style from "../css/style.module.css"

const Footer = () => {
    return(
        <footer>
            <div className={style.footerDiv}>
                <a href={adatv} download >
                    Adatvédelmi nyilatkozat
                </a>
                <p className={style.copyrightSize}>Copyright 2021 © Lelkierő</p>
            </div>
        </footer>
    )
}
export default Footer
