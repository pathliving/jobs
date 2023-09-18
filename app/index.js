import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header/Header';
import Welcome from '../components/Welcome/Welcome';
import PopularJobs from '../components/PopularJobs/PopularJobs';
import ActionIcon from '../components/Action/ActionIcon/ActionIcon';
import {COLORS} from '../constants/theme';
import * as icons from '../constants/icons';
import * as images from '../constants/images';

export default function Home() {
  return (
    <View style={styles.home}>
      <Header
        headerLeft={<ActionIcon appearance={COLORS.white} size={24} name={icons.menu} onPress={() => {}} />}
        headerRight={<ActionIcon size={40} name={images.avatar} onPress={() => {}} />}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome/>
        <PopularJobs />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: COLORS.tundra,
  },
})
