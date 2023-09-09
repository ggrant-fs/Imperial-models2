import{useState,useEffect} from 'react';
import Layout from "../Component/UI/Layout";
import MainImg from "../Component/UI/Mainimg";
import OurModels from "../Component/UI/OurModels";
import JoinUsMen from "../Component/UI/JoinUsMen";
import Models from '../Component/UI/Models';
import SectionDivider from '../Component/UI/SectionDivider';
import MainImgMobile from "../images/malemodel2.jpg";
import maleImg1 from "../images/malemodel3.jpg";
import maleImg2 from "../images/malemodel4.jpg";
import maleImg3 from "../images/malemodel5.jpg";
import  "./MaleModels.css";

const MaleModels = (props) =>{
  const [images, setImages] = useState([])
  const modelImgs = [
    {
    image1:maleImg1,
    image2:maleImg2,
    image3:maleImg3
    }
  ]

  useEffect(()=>{
    const fetchData = async() =>{
        const url = 'https://imperial-models-default-rtdb.firebaseio.com/models-imgs.json';
        const response = await fetch(url);
        const responseData = await response.json();

        let imgArray =[]
        
        for(const key in responseData){
          imgArray.push({
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
        console.log(imgArray)
        setImages(imgArray)
      }
      fetchData()
    },[])
    

      return (
          <Layout>
            <main>
            <MainImg images={MainImgMobile} className={`${"male-img"} ${"main-img-male"}`}/>
            <OurModels imgs={modelImgs}/>
            <JoinUsMen/>
            <SectionDivider>
              <div>
                <h3 className='section-block_title'>Our Men</h3>
              </div>
            </SectionDivider>
            <Models pics={images}/>
            </main>
          </Layout>
      )
};

export default MaleModels;
