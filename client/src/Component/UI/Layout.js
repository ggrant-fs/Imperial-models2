import { Fragment,useState} from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

const Layout = props =>{
    const [displayNav, setDisplayNav] =useState(false);  

    const displayNavHandler = (event) =>{
        event.preventDefault();
         if(displayNav === false){
             setDisplayNav((prevState)=> true);
         }else{
            setDisplayNav((prevState)=> false)
         }
    }

    return(
        <Fragment>
            <Header openNav={displayNavHandler}/>
            {displayNav && <Nav/>}
             {props.children}
           <Footer/>
        </Fragment>
    )
};

export default Layout;