import { Fragment} from 'react';
import 'css.gg/icons/css/menu.css'
import React from 'react';
import MenuButton from './MenuButton';
import styles from './Header.module.css';

const Header = (props) =>{

    return (
        <Fragment>
        <header className={styles['header']}>
           <MenuButton className={styles['header__logo']} />
           <div className={styles["title-wrapper"]}>
           <h3 className={styles["header__title"]}>Imperial Models</h3>
           </div>
           <div className={styles["header__menu__btn"]} onClick={props.openNav}>
           <i className="gg-menu"></i>
           </div>
        </header>
        </Fragment>
    )
};

export default Header;