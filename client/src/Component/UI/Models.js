import { Fragment} from "react";
import  './Models.css';
const Models = (props) =>{
    const pics = props.pics;
         
              
    return (
        <Fragment>
               {  pics.map((pic)=>(
          <div>
            <div>
              <div className="image-container">
                <img 
                className="img" 
                key={pic.id} 
                src={pic.image1} 
                alt=""
                />
              </div>
              <div className="image-container">
                <img 
                className="img" 
                key={pic.id} 
                src={pic.image2} 
                alt=""
                />
              </div>
              <div className="image-container">
                <img 
                className="img" 
                key={pic.id} 
                src={pic.image3} 
                alt=""
                />
              </div>
            </div>
            <div>
              <div className="image-container">
                <img 
                className="img" 
                key={pic.id} 
                src={pic.image4} 
                alt=""
                />
              </div>
              <div className="image-container">
                <img 
                className="img" 
                key={pic.id} 
                src={pic.image5} 
                alt=""
                />
              </div>
              <div className="image-container">
                <img 
                className="img" 
                key={pic.id} 
                src={pic.image6} 
                alt=""
                />
              </div>
            </div>
            <div>
              <div className="image-container">
                <img 
                className="img" 
                key={pic.id} 
                src={pic.image7} 
                alt=""
                />
              </div>
              <div className="image-container">
                <img 
                className="img" 
                key={pic.id} 
                src={pic.image8} 
                alt=""
                />
              </div>
              <div className="image-container">
                <img 
                className="img" 
                key={pic.id} 
                src={pic.image9} 
                alt=""
                />
              </div>
            </div>
         </div>
        )) }
        </Fragment>
    )
}

export default Models;