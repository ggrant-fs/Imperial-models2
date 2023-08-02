import {useEffect, useState, useRef} from 'react';
import styles from './Contact.module.css';
import pic from '../images/malemodel5.jpg';
import Layout from '../Component/UI/Layout';


const Contact = (props) =>{
  const firstNameInput = useRef('');
  const lastNameInput = useRef('');
  const emailInput = useRef('');
  const phoneNumberInput = useRef('');


const [firstName,setFirstName] =useState('');
const [lastName,setLastName] =useState('');
const [email,setEmail] = useState('');
const [phoneNumber, setPhoneNumber] =useState('')

const postData ={
    firstName: firstNameInput.current.value,
    lastName: lastNameInput.current.value,
    email: emailInput.current.value,
    phoneNumber: phoneNumberInput.current.value
}

useEffect(()=>{
  postRequest()
  .catch(console.error())
},[])


 async function postRequest (){
   const url = 'https://imperial-models-default-rtdb.firebaseio.com/contact.json';
   const response = await fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    
    body:JSON.stringify(postData)
   });
   const responseData = await response.json();
  }


const firstNameChangeHandler = event =>{
  event.preventDefault();
  setFirstName(event.target.value);
}

const lastNameChangeHandler = event =>{
  event.preventDefault();
  setLastName(event.target.value);
}

const emailChangeHandler = event =>{
  event.preventDefault();
  setEmail(event.target.value)
}

const phoneNumChangeHandler = event =>{
  event.preventDefault();
  setPhoneNumber(event.target.value)
}

const submitHandler = event =>{
  event.preventDefault();
  setFirstName('');
  setLastName('');
  setEmail('');
  setPhoneNumber('');
}
   
  
    return (
          <Layout>
            <main>
               <div className={styles["content-container"]}>
                  <form onSubmit={submitHandler}>
                    <h1 className={styles.contactUs}>Contact Us</h1>
                    <div className={styles["content"]}>
                    <div className={styles["label-wrapper"]}>
                    <label htmlfor="first-name">First Name</label>
                    <input 
                    type="text" 
                    id="first-name"
                    value={firstName}
                    onChange={firstNameChangeHandler}
                    ref={firstNameInput}
                    />
                    </div>
                    <div className={styles["label-wrapper"]}>
                    <label htmlfor="last-name" >Last Name</label>
                    <input 
                    type="text" 
                    id="last-name" 
                    value={lastName}
                    onChange={lastNameChangeHandler}
                    ref={lastNameInput}
                    />
                    </div>
                    <div className={styles["label-wrapper"]}>
                    <label htmlfor="email">Email</label>
                    <input 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={emailChangeHandler}
                    ref={emailInput}
                    />
                    </div>
                    <div className={styles["label-wrapper"]}>
                    <label htmlFor='phone-number'>Phone</label>
                    <input 
                    type="tel" 
                    id="phone-number"
                    value={phoneNumber}
                    onChange={phoneNumChangeHandler}
                    ref={phoneNumberInput}
                    />
                    </div>
                    </div>
                    <button type="submit" className={styles["submit-btn"]} onClick={postRequest}>submit</button>
                  </form>
                  <div className={styles.container}>
                    <img className={styles["contact-img"]} src={pic} alt=''/>  
                  </div>
               </div>
            </main>
          </Layout>
    )
}

export default Contact;
