import { Fragment } from 'react';
import React from 'react';
import imageOne from '../../images/featuredimg3.jpg';
import imageTwo from '../../images/featuredimg4.jpg';
import './FeaturedImg.css';

const FeaturedImg = () =>{
    return (
        <Fragment>
            <div className='feature-photos'>
               <div className='feature-photos__container'>
                   <img src={imageOne} alt='first feature img' className='feature-photos__img1'/>
               </div>
               <div className='feature-photos__container'>
                  <img src={imageTwo} alt='second feature img' className='feature-photos__img2'/>
               </div>
            </div>
        </Fragment>
    )
};

export default FeaturedImg;


