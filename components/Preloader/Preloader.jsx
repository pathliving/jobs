import {ActivityIndicator} from 'react-native';
import Typography from '../Typography/Typography';

const Preloader = ({isLoading, error, children}) => {
  return isLoading ? (
    <ActivityIndicator size="large"/>
  ) : error ? (
    <Typography>{error.message}</Typography>
  ) : (
    children
  );
}

export default Preloader;
