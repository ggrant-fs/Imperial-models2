import React from 'react';
import { Fragment } from 'react';
import styles from './OurModels.module.css';

const OurModels = (props)=>{
  const pics = props.imgs;

    return (
      <Fragment>
      {pics.map((img)=>(
            <div className={styles.container}>
               <div className={styles.models}>
                {<img className={styles.imgtag}src={img.image1} alt=""/>}
               </div>
                <div className={styles.models}>
                {<img className={styles.imgtag}src={img.image2} alt=""/>}
               </div>
               <div className={styles.models}>
                {<img className={styles.imgtag}src={img.image3} alt=""/>}
               </div> 
            </div>
           ))}
        </Fragment>
    ) 
}

export default OurModels;