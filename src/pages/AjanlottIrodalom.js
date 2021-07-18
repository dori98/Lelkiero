import React from "react"
import * as styles from "../css/style.module.css"
import {graphql, useStaticQuery} from "gatsby";
import * as style from "../css/style.module.css";

const Ajanlott = () => {
    const data = useStaticQuery(graphql`
   {
    allContentfulAjanlottIrodalom(sort: {fields: cim, order: ASC}) {
      nodes {
        id
        cim
        link
      }
    }
  }
  `)

    const{
        allContentfulAjanlottIrodalom:{nodes:ajanlott}
    }=data
    return(
        <>

            <div className={style.ajanlottFullPage}>
                <h1 className={styles.indexH1}>Ajánlott irodalmak</h1>
                <h3 className={style.arakH3}>Bla Bla Bla de kell valami </h3>

                <p >Könyvek</p>
                <p>Weboldalak</p>
            </div>
        </>
    )
}
export default Ajanlott