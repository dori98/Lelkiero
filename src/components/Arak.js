import React from "react"
import * as style from "../css/style.module.css";

const Arak = ({arak,lang}) => {
    return(
        <div>
            <h1 className={style.indexH1}>{lang === "HU" ? "Árak" : "Prices"}</h1>
            <h3 className={style.arakH3}>{lang === "HU" ? "Az oldalon nem minden ár van feltüntetve, mert az árak személyreszabottak." : "Not all prices are listed on the site because the prices are personalized."} <br/>
                {lang === "HU" ? "Egyéni terápia tartama 60 perc, családterápia 90 perc a vizsgálat 60 perc / alkalom azaz összesen 120 perc." : "The duration of individual therapy is 60 minutes, family therapy is 90 minutes and the study is 60 minutes / time."}</h3>
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
