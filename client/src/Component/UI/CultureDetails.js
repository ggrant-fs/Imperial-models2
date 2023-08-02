import { Fragment } from "react";
import styles from './CultureDetails.module.css';
import femalemodel3 from '../../images/femalemodel3.jpg';
import ReadMore from './ReadMore';

const CultureDetails = (props) =>{
    return (
        <Fragment>
           <div className={styles['culture__img-container']}>
              <img className={styles['culture__main-img']} src={femalemodel3} alt=''/>
           </div>
            <div className={styles['culture__img-container2']}> </div>
            <div className={styles['culture__milan-details']}>
                <h1 className={styles['culture__title']}>Milan</h1>
                <p className={styles['culture__milan-paragraph']}>
                Eget aliquet nibh praesent tristique magna sit amet. Mauris cursus 
                mattis molestie a iaculis at. Porta lorem mollis aliquam ut porttitor
                leo a. Ullamcorper a lacus vestibulum sed arcu. Magna eget est lorem
                ipsum. Tortor condimentum lacinia quis vel eros donec ac odio tempor.
                Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget 
                egestas.Nunc pulvinar sapien et ligula ullamcorper malesuada proin 
                libero. Semper risus in hendrerit gravida rutrum quisque non tellus. 
                </p>
                <ReadMore className={styles['readmore-btn']}/>
            </div>
            <div className={styles['culture__img-milan2']}></div>    
            <div className={styles['culture__paris-details']}>
               <h1 className={styles['culture__title']}>Paris</h1>
               <p className={styles['culture__paris-paragraph']}>
                Eget aliquet nibh praesent tristique magna sit amet. Mauris 
                cursus 
                mattis molestie a iaculis at. Porta lorem mollis aliquam ut porttitor
                leo a. Ullamcorper a lacus vestibulum sed arcu. Magna eget est lorem
                ipsum. Tortor condimentum lacinia quis vel eros donec ac odio tempor.
                Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget 
                egestas.
              </p>
              <p>
               Feugiat sed lectus vestibulum mattis ullamcorper velit sed. A erat
               nam at lectus urna duis. Posuere lorem ipsum dolor sit. Purus in massa
               tempor nec feugiat nisl pretium. Purus faucibus ornare suspendisse 
              </p>
              <ReadMore className={styles['readmore-btn']}/>
            </div>
            <div className={styles['culture__img-container3']}></div>
        </Fragment>
    )
};

export default CultureDetails;