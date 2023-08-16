import { Fragment} from "react";
import {NavLink} from 'react-router-dom';
import './Nav.css';

const Nav = (props) =>{
  
    return (
        <Fragment>
            <nav className="nav" onClick={props.sideBar}>
                <ul>
                    <li className="nav-item"><NavLink to='/home' activeClassName="active">Home</NavLink></li>
                    {/* <li><NavLink to='/contact' activeClassName={.active}>About</NavLink></li> */}
                    <li className="nav-item"><NavLink to='/models-females' activeClassName="active">Models</NavLink></li>
                    <li  className="nav-item"><NavLink to='/models-males' activeClassName="active" >Male Models</NavLink></li>
                    <li className="nav-item"><NavLink to='/contact' activeClassName="active">Contact</NavLink></li>
                </ul>
            </nav>
        </Fragment>
    )
};

export default Nav;