import React from 'react';
import {View} from 'react-native';
import ActionIcon from '../Action/ActionIcon/ActionIcon';
import Action from '../Action/Action';
import {COLORS, FONTS, SIZES, TYPOGRAPHY} from '../../constants/theme';
import * as icons from '../../constants/icons';
import {styles} from './styles';
import {useRouter} from 'expo-router';

const Footer = ({job}) => {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      <ActionIcon
        name={icons.heartFilled}
        appearance={COLORS.accent}
        size={SIZES.x20}
        color={COLORS.accent}
        isOutlined
      >
        like
      </ActionIcon>
      <Action
        onPress={() => router.push(job.job_apply_link)}
        size={TYPOGRAPHY.h4}
        type={FONTS.bold}
        style={styles.link}
      >
        Apply for job
      </Action>
    </View>
  );
};

export default Footer;