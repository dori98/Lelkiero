import React from "react"
import * as styles from "../css/style.module.css"
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image"
import * as style from "../css/style.module.css";

const Ajanlott = () => {
    const data = useStaticQuery(graphql`
   {
    konyv: allContentfulAjanlottIrodalom(filter: {weboldal: {eq: false}}) {
      nodes {
        id
        cim
        konyvKepe {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    },
    
    weboldal: allContentfulAjanlottIrodalom(filter: {weboldal: {eq: true}}) {
      nodes {
        id
        cim
        link
      }
    }
  }
  `)

    const {
        konyv: {nodes: konyv},
        weboldal: {nodes: weboldal}
    } = data

    return (
        <div className={style.ajanlottFullPage}>
            <h1 className={styles.indexH1}>Ajánlott irodalmak</h1>
            <h3 className={style.arakH3}>Bla Bla Bla de kell valami </h3>
            <h2>Könyvek</h2>
            <div className={styles.bookDiv}>

                {konyv.map(konyv => {
                    return (
                        <div>
                            <div key={konyv.id}>
                                <Img fluid={konyv.konyvKepe.fluid} className={styles.imageSize}/>
                                <p>{konyv.cim}</p>
                            </div>
                        </div>

                    )
                })}
            </div>

            <h2>Weboldalak</h2>
            <div>

                {weboldal.map(weboldal => {
                    return (
                        <div>
                            <div key={weboldal.id}>
                                <a href={weboldal.link}>{weboldal.cim}</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Ajanlott