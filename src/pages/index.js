import React from "react"
import Layout from "../components/Layout";
import {graphql, useStaticQuery} from "gatsby"
import icon from "../images/icon.png"
import * as style from "../css/style.module.css"
import Video from './Video'
import Form from './Form'
import Problemak from './Problemak'
import AjanlottIrodalom from './AjanlottIrodalom'
import Arak from './Arak'
import Elerhetoseg from './Elerhetoseg'
import Image from "gatsby-image";

const Index = () => {
    const data = useStaticQuery(graphql`
    {
    allContentfulBemutatkozas(filter: {lang: {eq: true}}) {
      nodes {
      fenykep {
          fluid {
             ...GatsbyContentfulFluid

          }
        }
        szoveg {
          szoveg
          id
        }
      }
    }
  }
  `)
    const {
        allContentfulBemutatkozas: {nodes: bemutatkozas}
    } = data
    return (
        <Layout>
            <div className={style.indexPage}>
                <div>
                    <h1 className={style.indexH1} id="bemutatkozas">Dr. Laczkó Katalin</h1>
                    <h2 className={style.indexH2}>gyermek- és ifjúsági pszichiáter szakorvos, család- és
                        párterapeuta</h2>

                    <div>
                        {bemutatkozas.map(b => {
                            return (
                                <div key={b.id}>
                                    <Image fluid={b.fenykep.fluid} className={style.indexImg}/>
                                    <p className={style.indexP}> {b.szoveg.szoveg}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <Problemak/>
                <div id="arak" className={style.line}/>
                <Arak/>
                <div id="idoponkeres" className={style.line}/>
                <Form/>

                <div id="videok" className={style.line}/>
                <Video/>
                <div id="ajanlottirodalom" className={style.line}/>
                <AjanlottIrodalom/>
                <div id="elerhetoseg" className={style.line}/>
                <Elerhetoseg/>

            </div>


        </Layout>
    )
}

export default Index