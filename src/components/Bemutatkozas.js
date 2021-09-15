import React from "react"

import * as style from "../css/style.module.css"

import Image from "gatsby-image";

const Bemutatkozas = ({image, text, lang}) => {

    return (
        <div>
            <h1 className={style.indexH1} id="bemutatkozas">Dr. Laczkó Katalin</h1>
            <h2 className={style.indexH2}>{lang === "HU" ? "Gyermek- és ifjúsági pszichiáter szakorvos, család- és párterapeuta" : "Consultant Child and Adolescent Psychiatrist, Couple and Family Therapist"}</h2>
            <div>
                <Image fluid={image} className={style.indexImg}/>
                <p className={style.indexP}> {text}</p>
            </div>
        </div>
    )
}
export default Bemutatkozas