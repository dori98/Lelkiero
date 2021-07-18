import React from 'react'
import {graphql, Link, useStaticQuery} from "gatsby"

import * as style from "../css/style.module.css"

const Elerhetoseg = () => {

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
        <section >
            <div >
                <h1 className={style.indexH1}>Elérhetőségek</h1>
                <h3 className={style.arakH3}>Ha nem jártál még nálam kérlek töltsd ki az időpontfoglaló formot és én felveszem veled a kapcsolatot!</h3>

                {elerhetoseg.map(e => {
                    return(
                        <div key={e.id} className={style.contactsPosition}>
                            <p><span className={style.contactColorText}>Tel.:</span>{e.telefonszam}</p>
                            <p><span className={style.contactColorText}>Email:</span>{e.email}</p>
                            <p><span className={style.contactColorText}>Rendelési idő:</span>{e.rendelesiIdo}</p>
                        </div>
                    )
                })}

            </div>
        </section>

    )
}
export default Elerhetoseg
