import { Fragment } from "react";
import React from 'react';
import styles from './MenuButton.module.css';


const MenuButton = () =>{
    return (
        <Fragment>
            <div className={styles.triangle}></div>
        </Fragment>
    )
};

export default MenuButton;