import React from "react"
import * as style from "../css/style.module.css";

const Problemak = ({problem, lang}) => {

    return (
        <>
            <div className={style.problemPage}>
                <h1 className={style.indexH1}>{lang === "HU" ? "Problémák amikben segítséget nyújthatok" : "You can come and see me in case you suffer from"}</h1>
                <br/>
                {problem.map(problema => {
                    return (
                        <div key={problema.id} className={style.problemBox}>
                            <ul className={style.problemBoxPosition}>
                                <li className={style.problemList}>
                                    {problema.problema}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Problemak