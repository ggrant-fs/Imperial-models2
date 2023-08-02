import { Fragment} from "react";
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = (props) =>{
  
    return (
        <Fragment>
            <nav className={styles.nav} onClick={props.sideBar}>
                <ul>
                    <li className={styles["nav-item"]}><NavLink to='/home' activeClassName={styles.active}>Home</NavLink></li>
                    {/* <li><NavLink to='/contact' activeClassName={styles.active}>About</NavLink></li> */}
                    <li className={styles["nav-item"]}><NavLink to='/models-females' activeClassName={styles.active}>Models</NavLink></li>
                    <li  className={styles["nav-item"]}><NavLink to='/models-males' activeClassName={styles.active} >Male Models</NavLink></li>
                    <li className={styles["nav-item"]}><NavLink to='/contact' activeClassName={styles.active}>Contact</NavLink></li>
                </ul>
            </nav>
        </Fragment>
    )
};

export default Nav;