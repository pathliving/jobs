import {View} from 'react-native';
import Header from '../components/Header/Header';
import Welcome from '../components/Welcome/Welcome';
import JobsList from '../components/JobsList/JobsList';
import Typography from '../components/Typography/Typography';

export default function Page() {
  return (
    <View>
      <Typography type="h2">Header</Typography>
      <Header/>
      <Welcome/>
      <Typography type="h2">Body</Typography>
      <JobsList/>
    </View>
  );
}
