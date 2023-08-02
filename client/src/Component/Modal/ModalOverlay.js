import {Fragment} from 'react';
import styles from './ModalOverlay.module.css';

const ModalOverlay =(props)=>{
    return(
        <Fragment>
            <div className={styles.modal}>
                <div className={styles.content}>{props.children}</div>
            </div>
        </Fragment>
    )
};

export default ModalOverlay ;