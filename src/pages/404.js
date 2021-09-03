import * as React from "react"
import Layout from "../components/Layout"
import * as style from "../css/style.module.css";
import { Link} from "gatsby"


// markup
const NotFoundPage = ({lang}) => {
  return (
     <Layout>
       <div className={style.fullpage}>
           <p>Hoppá valami hiba történt!</p>
           <div className={style.buttonPosition}>
               <Link to="/"  className={style.button}>Vissza a főoldalra</Link>
           </div></div>


     </Layout>
  )
}

export default NotFoundPage
