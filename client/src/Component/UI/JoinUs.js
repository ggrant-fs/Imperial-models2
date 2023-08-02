import React from 'react';
import { Fragment } from 'react';
import styles from './JoinUs.module.css';
const JoinUs = (props)=>{

    return (
        <Fragment>
            <div className={`${styles['joinUs']} ${styles[props.className]}`}>
                <div className={styles['joinUs__content']}>
                    <h1> Join New York City's Number One Model Mangement Agency</h1>
                    <button className={styles['joinUs__button']}>Join us </button>
                </div>
            </div>
        </Fragment>
    )
}

export default JoinUs;