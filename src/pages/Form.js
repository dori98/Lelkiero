import React from "react"
import * as styles from "../css/style.module.css"

import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Form = () => {
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
                    <h1>Időpontkérés</h1>
                    <p> Ha nem járt még nálam konzultáción akkor töltse ki az alábbi formot és mi felvesszük Önnel a kapcsolatot és egyeztetünk konzultációs időpontot.
                    </p>
                    <p>Ha előzőleg járt más orvosnál kérem a vizsgálat eredményét küldje el az alábbi email címre: info1katalin@gmail.com
                    </p>
                    <form >
                        <div className={styles.formGroup}>
                            <input
                                type="name"
                                name="name"
                                placeholder="Név"
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
                                placeholder="telefonszám (+36701234567)"
                                required={true}
                                maxLength={12}
                                className={styles.formControl}
                            />
                            <div className={styles.formP}>Kérem válassza ki milyen problémája van:</div>
                            <div className={styles.inputlabel}>
                                <input type="checkbox" id="vizsgalat" name="vizsgalat" value="vizsgalat" />
                                <label htmlFor="vvizsgalat" > Vizsgálat (18 éves korig)</label><br/>
                            </div>
                            <div className={styles.inputlabel}>
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                <label htmlFor="vehicle2"> Családterápia</label><br/>
                            </div>
                            <div className={styles.inputlabel}>
                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                <label htmlFor="vehicle3"> Párterápia</label><br/>
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
                                    Az adatvédelmi nyilatkozatot elfogadom
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
                                Küldés
                            </button>
                        </div>
                    </form>
                </article>
            </section>
        </>
    )
}
export default Form
