import { Grid } from  'react-loader-spinner'
import Layout from './Layout';
const LoadingSpinner = (props) =>{
    return (
        
        <Grid
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    )
}

export default LoadingSpinner;