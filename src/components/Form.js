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
                    <p>{lang === "HU" ? "Ha nem járt még nálam konzultáción akkor töltse ki az alábbi formot és mi felvesszük Önnel a kapcsolatot és egyeztetünk konzultációs időpontot." :
                        "If you have not been to a consultation with me yet, fill in the form below and we will contact you and arrange a consultation date."}
                    </p>
                    <p>{lang === "HU" ? "Ha előzőleg járt más orvosnál kérem a vizsgálat eredményét küldje el az alábbi email címre: info1katalin@gmail.com" : "If you have previously visited another doctor, please send the results of the examination to the following email address: info1katalin@gmail.com"}
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
                                <label htmlFor="vvizsgalat" >{lang === "HU" ? "Vizsgálat (18 éves korig)" : "Examination (up to 18 years)"} </label><br/>
                            </div>
                            <div className={styles.inputlabel}>
                                <input type="checkbox" id="csaladterapia" name="csaladterapia" value="csalad"/>
                                <label htmlFor="csaladterapia"> {lang === "HU" ? "Családterápia" :  "Family therapy"}</label><br/>
                            </div>
                            <div className={styles.inputlabel}>
                                <input type="checkbox" id="parterapia" name="parterapia" value="par"/>
                                <label htmlFor="parterapia"> {lang === "HU" ? "Párterápia" : "Couple therapy"}</label><br/>
                            </div>
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
