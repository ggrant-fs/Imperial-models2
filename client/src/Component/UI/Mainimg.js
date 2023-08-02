import {Fragment} from 'react';
import styles from './Mainimg.module.css';

const MainImg = (props) =>{
    return (
          <Fragment>
            <div className={`${styles['default-styling']} ${styles["main-image-desktop"]} ${props.className}`}> </div>
            <img className={`${styles["default-styling"]} ${styles["main-image-mobile"]} ${props.className}`} src={props.images} alt=""/>
          </Fragment>
    )
};

export default MainImg;