import {Fragment} from 'react';
import  './Mainimg.css';

const MainImg = (props) =>{
    return (
          <Fragment>
            <div className={`${['default-styling']} ${["main-image-desktop"]} ${props.className}`}> </div>
            <img className={`${["default-styling"]} ${["main-image-mobile"]} ${props.className}`} src={props.images} alt=""/>
          </Fragment>
    )
};

export default MainImg;