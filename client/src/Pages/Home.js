import { useState, useEffect } from 'react';
import Layout from '../Component/UI/Layout';
import FeaturedImg from '../Component/UI/FeaturedImg';
import Introduction from '../Component/UI/Introduction';
import SectionDivider from '../Component/UI/SectionDivider';
import NewSubscriber from "../Component/Modal/NewSubscriber";
import CultureDetails from "../Component/UI/CultureDetails";
import styles from './Home.module.css';


const Home = (props) =>{
    const [displayModal, setDisplayModal] =useState(false);
    

    useEffect(()=>{
         const timer = setTimeout(()=> setDisplayModal(true), 20000);
         return ()=> clearTimeout(timer)
    },[])

    const hideModalHandler =()=>{
         setDisplayModal(false);
    }


 return (
         <Layout >
           <main>
            {displayModal && <NewSubscriber onClose={hideModalHandler}/>}
             <FeaturedImg />
             <SectionDivider>
                <div>
                    <h3 className={styles['section-block_title']}>The Brand</h3>
                </div>
             </SectionDivider>
             <Introduction />
             <SectionDivider>
                <div>
                    <h3 className={styles['section-block_title']}>The Culture</h3>
                </div>
            </SectionDivider>
           </main>
            <CultureDetails/>
        </Layout>
    )
}

export default Home;