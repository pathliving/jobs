import {ActivityIndicator, Text} from 'react-native';

const Preloader = ({isLoading, error, children}) => {
  return isLoading ? (
    <ActivityIndicator size="large"/>
  ) : error ? (
    <Text>{error}</Text>
  ) : (
    children
  );
}

export default Preloader;
