import React from 'react';
import { Fragment } from 'react';
import './JoinUs.css';
const JoinUs = (props)=>{

    return (
        <Fragment>
            <div className={`${'joinUs'} ${props.className}`}>
                <div className='joinUs__content'>
                    <h1> Join New York City's Number One Model Mangement Agency</h1>
                    <button className='joinUs__button'>Join us </button>
                </div>
            </div>
        </Fragment>
    )
}

export default JoinUs;