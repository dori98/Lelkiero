import React from "react"
import {graphql, useStaticQuery} from "gatsby";
import * as style from "../css/style.module.css";

const Arak = () => {
    const data = useStaticQuery(graphql`
     {
    allContentfulArak {
      nodes {
        ar
        nev
      }
    }
  }
  `)

    const{
        allContentfulArak:{nodes:arak}
    }=data
    return(
        <div>
            <h1 className={style.indexH1}>Árak</h1>
            <h3 className={style.arakH3}>Az oldalon nem minden ár van feltüntetve, mert az árak személyreszabottak. <br/>
                Egyéni terápia tartama 60 perc, családterápia 90 perc
                a vizsgálat 60 perc / alkalom azaz összesen 120 perc.</h3>

                {arak.map(e => {
                    return(
                        <div  className={style.arakPage}>
                            <div key={e.id} className={style.arakGrid}>
                                <p className={style.tipusP}>{e.nev}</p>
                                <p className={style.arakP}>{e.ar}</p>
                            </div>
                        </div>
                    )
                })}


        </div>
    )
}
export default Arak

/* {arak.map(e => {
                return(
                    <div className={style.arakPage}>
                        <div key={e.id}>
                            <p className={style.arakP}>{e.nev}...................{e.ar}</p>
                        </div>
                    </div>
                )
            })}*/