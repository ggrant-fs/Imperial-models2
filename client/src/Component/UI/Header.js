import { Fragment} from 'react';
import 'css.gg/icons/css/menu.css'
import React from 'react';
import MenuButton from './MenuButton';
import './Header.css';

const Header = (props) =>{

    return (
        <Fragment>
        <header className='header'>
           <MenuButton className='header__logo' />
           <div className="title-wrapper">
           <h3 className="header__title">Imperial Models</h3>
           </div>
           <div className="header__menu__btn" onClick={props.openNav}>
           <i className="gg-menu"></i>
           </div>
        </header>
        </Fragment>
    )
};

export default Header;