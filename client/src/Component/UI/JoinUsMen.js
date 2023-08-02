import { Fragment } from "react";
import styles from './JoinUsMen.module.css';

const JoinUsMen = (props) =>{
    return (
        <Fragment>
            <div className={styles["intro-container"]}>
              <div className={styles.intro}>
                <div className={styles["intro__description"]}>
                    <h1 className={styles["intro__heading"]}>Join the number one male model agency in NYC Paris and Milan</h1>
                </div>
                <button className={styles['joinUs__button']}>Join us </button>
              </div>
            </div>       
        </Fragment>
    )
}

export default JoinUsMen;