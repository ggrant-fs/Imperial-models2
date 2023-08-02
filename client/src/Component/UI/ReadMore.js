import styles from './ReadMore.module.css';

const ReadMore = (props) =>{
    return(
            <button type='text' className={`${props.className} ${styles['readmore']}`}>Read More</button>
    )
};

export default ReadMore;