import React from 'react';
import {Image, View} from 'react-native';
import Typography from '../Typography/Typography';
import {FONTS, SIZES, TYPOGRAPHY} from '../../constants/theme';
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import * as icons from '../../constants/icons';
import {styles} from './styles.js';

const Styles = ({job}) => {
  return (
    <View style={styles.header}>
      <Logo url={job.employer_logo} style={styles.logo} />
      {job.job_title && (
        <Typography size={TYPOGRAPHY.h2} type={FONTS.bold} style={styles.title}>
          {job.job_title}
        </Typography>
      )}
      <View style={styles.subtitle}>
        {job.employer_name && (
          <Typography type={FONTS.medium}>{job.employer_name}</Typography>
        )}
        {job.job_city && job.job_state && (
          <Typography>
            &nbsp;/&nbsp;
            <Icon size={SIZES.x16} name={icons.location}/>
            {job.job_city}, {job.job_state}
          </Typography>
        )}
      </View>
    </View>
  );
};

export default Styles;
