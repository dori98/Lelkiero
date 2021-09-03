import React from 'react'

import * as style from "../css/style.module.css"

const Footer = () => {
/*
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
  `)*/


    return(
        <footer>
            <div className={style.footerDiv}>

                <p className={style.copyrightSize}>Copyright 2021 © Lelkierő</p>
            </div>
        </footer>

    )
}
export default Footer
/*
 const{
        allContentfulElerhetoseg:{nodes:elerhetoseg}
    }=data

{elerhetoseg.map(e => {
                    return(
                        <div key={e.id} className={style.footerP}>
                            <h2 className={style.footerH2}>{e.nev}</h2>
                            <p>Tel.:{e.telefonszam}</p>
                            <p>Email:{e.email}</p>
                            <p>Rendelési idő:{e.rendelesiIdo}</p>
                        </div>
                    )
                })}*/