import React from "react"
import * as style from "../css/style.module.css";

const Arak = ({arak,lang}) => {
    return(
        <div>
            <h1 className={style.indexH1}>{lang === "HU" ? "Árak" : "Prices"}</h1>
            <h3 className={style.arakH3}>{lang === "HU" ? "Az árak személyenként eltérhetnek." : "Prices may vary per person. "} <br/>
                {lang === "HU" ? "Egyéni terápia tartama 60 perc, családterápia 90 perc, a vizsgálat általában 60-90 perc/alkalom." : "Duration of individual therapy: 60 minutes, Duration of family therapy: 90 minutes, assessment: usually 60-90 minutes/occasion."}</h3>
            {arak.map(e => {
                return(
                    <div  key={e.id} className={style.arakPage} >
                        <div className={style.arakGrid}>
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
