import { Fragment } from 'react';
import React from 'react';
import  './SectionDivider.css';


const SectionDivider = (props) =>{
    return (
        <Fragment>
            <div className='section-block'>
              {props.children}
            </div>
        </Fragment>
    )
}

export default SectionDivider;