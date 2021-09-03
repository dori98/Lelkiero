import React from "react"
import * as styles from "../css/style.module.css"
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image"
import * as style from "../css/style.module.css";

const Ajanlott = ({lang}) => {
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
        <div>
            <h1 className={styles.indexH1}>{lang === "HU" ? "Ajánlott irodalmak" :  "Recommended literature"}</h1>
            <h3 className={style.arakH3}>{lang === "HU" ? "A weboldalakat megtekintheted ha rákattintasz a nevükre BLABLABLA" :  "Missing"} </h3>
            <div className={style.ajanlottBookWebDiv}>

                <div className={styles.bookDiv}>

                    {konyv.map(konyv => {
                        return (
                            <div key={konyv.id}>
                                <Img fluid={konyv.konyvKepe.fluid} className={styles.imageSize}/>
                                <p className={style.bookP}>{konyv.cim}</p>
                            </div>
                        )
                    })}
                </div>
            </div>



             <div className={style.ajanlottBookWebDiv}>
             <h2 className={style.videoTitle}>Weboldalak</h2>

             <div className={styles.webDiv}>

             {weboldal.map(weboldal => {
                  return (
                    <div key={weboldal.id}>
                        <a href={weboldal.link} className={style.webP}>{weboldal.cim}</a>
                    </div>

                      )})}
                      </div>
                      </div>

           </div>
            )}
                    export default Ajanlott