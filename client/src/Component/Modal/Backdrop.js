import { Fragment } from "react";
import styles from './Backdrop.module.css';

const Backdrop =(props)=>{
    return(
        <Fragment>
          <div className={styles.backdrop} onClick={props.onClose}></div>
        </Fragment>
    )
}

export default Backdrop;