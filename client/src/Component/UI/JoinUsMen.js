import { Fragment } from "react";
import  './JoinUsMen.css';

const JoinUsMen = (props) =>{
    return (
        <Fragment>
            <div className="intro-container">
              <div className="intro">
                <div className="intro__description">
                    <h1 className="intro__heading">Join the number one male model agency in NYC Paris and Milan</h1>
                </div>
                <button className='joinUs__button'>Join us </button>
              </div>
            </div>       
        </Fragment>
    )
}

export default JoinUsMen;