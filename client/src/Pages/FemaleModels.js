import{useState,useEffect} from 'react';
import Layout from '../Component/UI/Layout';
import MainImg from '../Component/UI/Mainimg';
import OurModels from "../Component/UI/OurModels";
import Models from '../Component/UI/Models';
import SectionDivider from '../Component/UI/SectionDivider'
import JoinUs from "../Component/UI/JoinUs";
import femImg1 from '../images/femalemodel13.jpg';
import femImg2 from '../images/femalemodel16.jpg';
import femImg3 from '../images/femalemodel11.jpg';
import femImg19 from '../images/femalemodel19.jpg';
import './FemaleModels.css';


const FemaleModels = (props) =>{
const [images,setImages] =useState([])

  const modelImgs = [
   {
      image1:femImg1,
      image2:femImg2,
      image3:femImg3
   }
]

useEffect(()=>{
    const fetchData = async() =>{
       const url = 'https://imperial-models-default-rtdb.firebaseio.com/fem-models.json';
       const response = await fetch(url);
       if(!response.ok){
          throw new Error('something went wrong');
       }
       const responseData = await response.json()

       const imageArray = [];

       for(const key in responseData){
          imageArray.push({
            id:key,
            image1: responseData[key].image1,
            image2: responseData[key].image2,
            image3: responseData[key].image3,
            image4: responseData[key].image4,
            image5: responseData[key].image5,
            image6: responseData[key].image6,
            image7: responseData[key].image7,
            image8: responseData[key].image8,
            image9: responseData[key].image9,
          })
       }
      console.log(imageArray)
       setImages(imageArray)
    }
    fetchData()
    .catch(console.error())
},[])
    return (
          <Layout>
         <main>
             <MainImg images={femImg19} className={`${"fem-img"} ${"main-img-female"}`}/>
             <OurModels imgs={modelImgs}/>
             <JoinUs/>
             <SectionDivider>
               <div>
                <h3 className='section-block_title'>Our Ladies</h3>
              </div>
             </SectionDivider>
             <Models pics={images} />
        </main>
          </Layout>
    )
};

export default FemaleModels