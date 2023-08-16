import './ReadMore.css';

const ReadMore = (props) =>{
    return(
            <button type='text' className={`${props.className} ${'readmore'}`}>Read More</button>
    )
};

export default ReadMore;