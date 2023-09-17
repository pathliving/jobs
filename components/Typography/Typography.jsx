import React from 'react';
import {StyleSheet, Text as TextDefault} from 'react-native';
import {TYPOGRAPHY, FONTS} from '../../constants/theme';

const Typography = ({
  children,
  appearance = TYPOGRAPHY.p,
  type = FONTS.regular,
  style: propStyles,
}) => {
  return (
    <TextDefault style={styles.text(appearance, type, propStyles)}>
      {children}
    </TextDefault>
  );
};

export default Typography;

const styles = StyleSheet.create({
  text: (appearance, type, propStyles) => ({
    fontFamily: type ?? FONTS.regular,
    fontSize: appearance ?? TYPOGRAPHY.p,
    ...propStyles
  }),
});
