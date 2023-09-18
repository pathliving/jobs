import React from 'react';
import {View} from 'react-native';
import {useGlobalSearchParams} from 'expo-router';
import Typography from '../Typography/Typography';
import JobsList from '../JobsList/JobsList';
import {FONTS, TYPOGRAPHY} from '../../constants/theme';
import {styles} from './styles';

const SearchResult = () => {
  const searchParams = useGlobalSearchParams();
  const jobsAmount = searchParams.id === 'all' ? searchParams.id : 10;

  return (
    <>
      <View style={styles.list}>
        <Typography size={TYPOGRAPHY.h1} type={FONTS.bold}
                    style={styles.subtitle}>{searchParams.id}</Typography>
        <Typography style={styles.subtitle}>{jobsAmount} Job Opportunities</Typography>
      </View>
      <JobsList query={searchParams.id}/>
    </>
  );
};

export default SearchResult;