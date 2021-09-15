import React from "react"
import * as styles from "../css/style.module.css"

import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Form = ({lang}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return(
        <>
            <section className={styles.contactPage}>
                <article className={styles.contactForm}>
                    <h1>{lang === "HU" ? "Időpontkérés" : "Appointment form"}</h1>
                    <p>{lang === "HU" ? "Ha nem járt még nálam konzultáción, kérem, töltse ki az alábbi Űrlapot. Ezt követően rövid időn belül felveszem Önnel a kapcsolatot. Konzultációs időpontot emailben egyeztetünk." :
                        "In case this is your first appointment, please fill in the form below. I will contact you within a week via email to arrange an appointment."}
                    </p>
                    <p>{lang === "HU" ? "Ha előzőleg járt más szakembernél, kérem a korábbi szakvéleményeket szkennelve küldje meg részemre az alábbi email címre: info1katalin@gmail.com" : "In case you have been seen by other professionals please forward previous  reports scanned to the following email address: info1katalin@gmail.com"}
                    </p>
                    <form >
                        <div className={styles.formGroup}>
                            <input
                                type="name"
                                name="name"
                                placeholder={lang === "HU" ? "Név" : "Name"}
                                required={true}
                                className={styles.formControl}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                required={true}
                                className={styles.formControl}
                            />
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder={lang === "HU" ? "Telefonszám" : "Phone number"}
                                required={true}
                                maxLength={12}
                                className={styles.formControl}
                            />


                            <div className={styles.formP}>{lang === "HU" ? "Kérem válassza ki milyen problémája van" :  "Please select what problem you have"}:</div>
                            <div className={styles.inputlabel}>
                                <input type="checkbox" id="vizsgalat" name="vizsgalat" value="vizsgalat" />
                                <label htmlFor="vvizsgalat" >{lang === "HU" ? "Vizsgálat (18 éves korig)" : "Assasment (up to 18 years)"} </label><br/>
                            </div>
                            <div className={styles.inputlabel}>
                                <input type="checkbox" id="csaladterapia" name="csaladterapia" value="csalad"/>
                                <label htmlFor="csaladterapia"> {lang === "HU" ? "Családterápia" :  "Family therapy"}</label><br/>
                            </div>
                            <div className={styles.inputlabel}>
                                <input type="checkbox" id="parterapia" name="parterapia" value="par"/>
                                <label htmlFor="parterapia"> {lang === "HU" ? "Párterápia" : "Couple counselling"}</label><br/>
                            </div>
                            <textarea
                                rows="4"
                                cols="50"
                                name="comment"
                                form="usrform"
                                placeholder={lang === "HU" ? "Miben kérnek segítséget?"
                                     : "How can I help you?"}
                                className={styles.formControl}
                            />

                            <div className={styles.links}>
                            </div>
                            <div>
                                <Button
                                    variant="outlined"
                                    onClick={handleClickOpen}
                                    style={{
                                        border:"none"
                                    }}
                                >
                                    {lang === "HU" ? "Az adatvédelmi nyilatkozatot elfogadom" : "I accept the privacy statement"}
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">{"Adatvédelmi nyilatkozat"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                           Ez kell

                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} required={true}>
                                            ok
                                        </Button>

                                    </DialogActions>
                                </Dialog>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    required={true}
                                />


                            </div>
                            <button type="submit" className={`${styles.submitBtn} ${styles.btn}`}>
                                {lang === "HU" ? "Küldés" : "Submit"}
                            </button>
                        </div>
                    </form>
                </article>
            </section>
        </>
    )
}
export default Form
