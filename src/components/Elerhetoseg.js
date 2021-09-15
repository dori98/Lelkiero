import React from 'react'
import {graphql, useStaticQuery} from "gatsby"

import * as style from "../css/style.module.css"

const Elerhetoseg = ({lang}) => {
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
    const {
        allContentfulElerhetoseg: {nodes: elerhetoseg}
    } = data
    return (
        <section>
            <div>
                <h1 className={style.indexH1}>{lang === "HU" ? "Elérhetőségek" : "Contacts"}</h1>
                <h3 className={style.arakH3}>{lang === "HU" ? "Ha nem jártál még nálam kérlek töltsd ki az időpontfoglaló formot és én felveszem veled a kapcsolatot!" : "If you have not visited me yet, please fill in the appointment form and I will contact you!"}</h3>

                {elerhetoseg.map(e => {
                    return (
                        <div key={e.id} className={style.contactsPosition}>
                            <p><span
                                className={style.contactColorText}>{lang === "HU" ? "Tel.:" : "Phone:"}</span>{e.telefonszam}
                            </p>
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
