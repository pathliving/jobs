import React from 'react';
import {View} from 'react-native';
import Typography from '../Typography/Typography';
import {FONTS, TYPOGRAPHY} from '../../constants/theme';
import {styles} from './styles';

const Description = ({tabs, activeTab}) => {
  return (
    <View style={styles.description}>
      <Typography size={TYPOGRAPHY.h3} type={FONTS.medium}
                  style={styles.title}>{activeTab}:</Typography>
      {tabs[activeTab]?.map((value) => (
        <Typography style={styles.item} key={value}>{value}</Typography>
      ))}
    </View>
  );
};

export default Description;
