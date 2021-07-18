import React from "react"
import {graphql,  useStaticQuery} from "gatsby"
import * as style from "../css/style.module.css"

const V = () => {
    const data = useStaticQuery(graphql`
   {
    allContentfulVideo {
      nodes {
        nev
        link
          id
      }
    }
  }
  `)

    const{
        allContentfulVideo:{nodes:videos}
    }=data
    return(
        <>
            <div className={style.videoPage}>
                <h1 className={style.indexH1}>Videók</h1>
                <div className={style.videoGrid}>
                    {videos.map(video => {
                        return(
                            <div >
                                <div key={video.id} >
                                    <p className={style.videoTitle}>{video.nev}</p>
                                    <iframe  src={video.link} title="legyen" className={style.videoBox}></iframe>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default V