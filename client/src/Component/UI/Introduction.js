import { Fragment } from 'react';
import React from 'react';
import femaleModel12 from '../../images/femalemodel12.jpg';
import  './Introduction.css';

const Introduction = () =>{
    return (
        <Fragment>
        {/* <div className={styles.intro}> */}
            <div className="intro__container">
                <img src={femaleModel12} alt=' ' className="intro__img"/>
            </div>
            <div className="intro__decription">
                {/* <h2 className={intro__title}>Introduction</h2> */}
                <p className="intro__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Enim praesent elementum facilisis leo vel fringilla
                est ullamcorper. Orci sagittis eu volutpat odio. Turpis 
                tincidunt id aliquet risus feugiat. Dictum fusce ut placerat 
                orci nulla pellentesque dignissim.
                </p>

                <p className="intro__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ac turpis egestas maecenas pharetra convallis posuere morbi. 
                 Consectetur adipiscing elit ut aliquam purus sit. Nec ultrices 
                 dui sapien eget mi proin sed libero enim.
                </p>
            </div>
        {/* </div> */}
        </Fragment>
    )
};

export default Introduction;