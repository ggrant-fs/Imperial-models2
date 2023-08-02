import { Fragment } from 'react';
import React from 'react';
import styles from './SectionDivider.module.css';


const SectionDivider = (props) =>{
    return (
        <Fragment>
            <div className={styles['section-block']}>
              {props.children}
            </div>
        </Fragment>
    )
}

export default SectionDivider;