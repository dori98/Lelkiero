import React from "react"
import {graphql, useStaticQuery} from "gatsby";
import * as style from "../css/style.module.css";

const Problemak = () => {
    const data = useStaticQuery(graphql`
   {
    allContentfulProblemakAmibenSegitsegetNyujthatok {
      nodes {
        id
        problema
      }
    }
  }
  `)

    const{
        allContentfulProblemakAmibenSegitsegetNyujthatok:{nodes:problema}
    }=data
    return(
        <>
            <div className={style.problemPage}>
                <h1 className={style.indexH1}>Problémák amikben segítséget nyújthatok</h1>
                <br/>
                {problema.map(problema => {
                    return(
                        <div className={style.problemBox}>
                            <div key={problema.id} >
                                <ul className={style.problemBoxPosition} >
                                    <li className={style.problemList}>
                                        {problema.problema}
                                    </li>
                                </ul>
                            </div>
                        </div>

                    )
                })}
            </div>

        </>
    )
}
export default Problemak