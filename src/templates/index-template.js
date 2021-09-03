import React from 'react';
import {graphql} from "gatsby";

import Layout from "../components/Layout"
import Bemutatkozas from "../components/Bemutatkozas";
import Problemak from "../components/Problemak";
import Arak from "../components/Arak";
import Form from "../components/Form";
import Video from "../components/Video";
import AjanlottIrodalom from "../components/AjanlottIrodalom";
import Elerhetoseg from "../components/Elerhetoseg";

import * as style from "../css/style.module.css";

const IndexTemplate = ({data}) => {
    const {bemutatkozas, problemak, arak} = data;
    return (
        <Layout lang={bemutatkozas.lang}>
            <div className={style.indexPage}>
                <Bemutatkozas image={bemutatkozas.fenykep.fluid} text={bemutatkozas.szoveg.szoveg} lang={bemutatkozas.lang}/>
                <Problemak problem={problemak.nodes } lang={bemutatkozas.lang}/>

                <div id="arak" className={style.line}/>
                <Arak arak={arak.nodes} lang={bemutatkozas.lang}/>

                <div id="idoponkeres" className={style.line}/>
                <Form lang={bemutatkozas.lang} />

                <div id="videok" className={style.line}/>
                <Video lang={bemutatkozas.lang}/>

                <div id="ajanlottirodalom" className={style.line}/>
                <AjanlottIrodalom lang={bemutatkozas.lang}/>

                <div id="elerhetoseg" className={style.line}/>
                <Elerhetoseg lang={bemutatkozas.lang}/>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query GetSingleIndex($lang: String) {
    bemutatkozas:  contentfulBemutatkozas(lang: {eq: $lang}) {
      lang
      fenykep {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      szoveg {
        szoveg
      }
    }
    problemak: allContentfulProblemakAmibenSegitsegetNyujthatok(filter: {lang: {eq: $lang}}) {
        nodes {
          lang
          problema
        }
    }
    arak: allContentfulArak(filter: {lang: {eq: $lang}}) {
        nodes {
          lang
          ar
          nev
        }
    }
}
`

export default IndexTemplate;