import React from 'react'
import {graphql, Link, useStaticQuery} from "gatsby"

import * as style from "../css/style.module.css"

const Footer = () => {

    const data = useStaticQuery(graphql`
    {
      allContentfulElerhetoseg {
        nodes {
          rendelesiIdo
          email
          id
          nev
          telefonszam
        }
      }
    }
  `)

    const{
        allContentfulElerhetoseg:{nodes:elerhetoseg}
    }=data
    return(
        <footer>
            <div className={style.footerDiv}>
                {elerhetoseg.map(e => {
                    return(
                        <div key={e.id} className={style.footerP}>
                            <h2 className={style.footerH2}>{e.nev}</h2>
                            <p>Tel.:{e.telefonszam}</p>
                            <p>Email:{e.email}</p>
                            <p>Rendelési idő:{e.rendelesiIdo}</p>
                        </div>
                    )
                })}
                <p className={style.copyrightSize}>Copyright 2021 © Lelkierő</p>
            </div>
        </footer>

    )
}
export default Footer
