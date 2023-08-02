import Modal from './Modal';
import femaleModel5 from '../../images/femalemodel5.jpg';
import styles from './NewSubscriber.module.css';

const NewSubscriber = (props) =>{


    return (
        <Modal onClose={props.onClose}>
          <div className={styles.subscriber}>
            <img src={femaleModel5} alt='female modal' className={styles['modal-image']}/>
            <form className={styles.subscriber__form}>
              <div className={styles.subscriber__cta}>
                    <p className={styles.subscriber__content}>Subscribe for a chance to join us at this years New York Fashion Week!</p>
              </div>
              <div className={styles['subscriber-btn-container']}>
                 <button className={styles.subscriber__btn} >Subscribe</button>
              </div>
            </form>
          </div>
        </Modal>
    )
}

export default NewSubscriber;