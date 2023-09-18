import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useRouter} from 'expo-router';
import Typography from '../Typography/Typography';
import JobsList from '../JobsList/JobsList';
import {FONTS, TYPOGRAPHY} from '../../constants/theme';
import {styles} from './styles';

const PopularJobs = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.popularJobs}>
        <Typography size={TYPOGRAPHY.h3} type={FONTS.medium}>Popular jobs</Typography>
        <TouchableOpacity onPress={() => router.push('/search/all')}>
          <Typography size={TYPOGRAPHY.p} type={FONTS.regular} style={styles.more}>Show
            all</Typography>
        </TouchableOpacity>
      </View>
      <JobsList/>
    </View>
  );
};

export default PopularJobs;
