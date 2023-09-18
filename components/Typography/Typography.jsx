import React from 'react';
import {Text as TextDefault} from 'react-native';
import {TYPOGRAPHY, FONTS} from '../../constants/theme';
import {styles} from './styles';

const Typography = ({
  children,
  size = TYPOGRAPHY.p,
  type = FONTS.regular,
  style: propStyles,
}) => {
  return (
    <TextDefault style={styles.text(size, type, propStyles)}>
      {children}
    </TextDefault>
  );
};

export default Typography;
