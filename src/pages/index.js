import React from "react"
import Layout from "../components/Layout";
import {graphql,  useStaticQuery} from "gatsby"
import icon from "../images/icon.png"
import * as style from "../css/style.module.css"
import Video from './Video'
import Form from './Form'
import Problemak from './Problemak'
import AjanlottIrodalom from './AjanlottIrodalom'
import ReactMarkdown from "react-markdown"
import Arak from'./Arak'
import Elerhetoseg from './Elerhetoseg'
const Index = () => {
    const data = useStaticQuery(graphql`
    {
    allContentfulBemutatkozas {
      nodes {
        szoveg {
          szoveg
          id
        }
      }
    }
  }
  `)
    const{
        allContentfulBemutatkozas:{nodes:bemutatkozas}
    }=data
    return(
        <Layout>
            <div className={style.indexPage}>
                <div>
                    <h1 className={style.indexH1} id="bemutatkozas">Dr. Laczkó Katalin</h1>
                    <h2 className={style.indexH2}>gyermek- és ifjúsági pszichiáter szakorvos, család- és párterapeuta</h2>
                    <img src={icon} alt="icon" width="200" height="250" className={style.indexImg}/>
                    <div>
                        {bemutatkozas.map(b => {
                            return(
                                <div key={b.id}>
                                    <p className={style.indexP}> {b.szoveg.szoveg}</p>
                                </div>
                            )
                        })}


                    </div>
                </div>

                <Problemak/>
                <div id="arak" className={style.line}></div>
                <Arak />
                <div id="idoponkeres" className={style.line}></div>
                <Form />
                <div id="elerhetoseg" className={style.line}></div>
                <Elerhetoseg/>
                <div id="videok" className={style.line}></div>
                <Video />
                <div id="ajanlottirodalom" className={style.line}></div>
                <AjanlottIrodalom />

            </div>


        </Layout>
    )
}

export default Index