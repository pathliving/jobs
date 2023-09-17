import {View, StyleSheet} from 'react-native';
import Header from '../components/Header/Header';
import Welcome from '../components/Welcome/Welcome';
import PopularJobs from '../components/PopularJobs/PopularJobs';
import JobsList from '../components/JobsList/JobsList';
import ActionIcon from '../components/Action/ActionIcon';
import {COLORS} from '../constants/theme';
import * as icons from '../constants/icons';
import * as images from '../constants/images';

export default function Home() {
  return (
    <View style={styles.home}>
      <Header
        headerLeft={<ActionIcon size={24} name={icons.menu} />}
        headerRight={<ActionIcon size={40} name={images.avatar} />}
      />
      <Welcome/>
      <PopularJobs>
        <JobsList />
      </PopularJobs>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: COLORS.tundra,
  },
})
