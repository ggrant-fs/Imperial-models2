import React from 'react';
import { Fragment } from 'react';
import  './OurModels.css';

const OurModels = (props)=>{
  const pics = props.imgs;

    return (
      <Fragment>
      {pics.map((img)=>(
            <div className="container">
               <div className="models">
                {<img className="imgtag"src={img.image1} alt=""/>}
               </div>
                <div className="models">
                {<img className="imgtag"src={img.image2} alt=""/>}
               </div>
               <div className="models">
                {<img className="imgtag"src={img.image3} alt=""/>}
               </div> 
            </div>
           ))}
        </Fragment>
    ) 
}

export default OurModels;