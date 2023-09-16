import React from 'react';
import {StyleSheet, Text as TextDefault} from 'react-native';
import {FONTS, TYPOGRAPHY} from '../../constants/theme';

const Typography = ({children, type = 'p', style: propStyles}) => {
  return (
    <TextDefault style={styles.text(type, propStyles)}>
      {children}
    </TextDefault>
  );
};

export default Typography;

const styles = StyleSheet.create({
  text: (type, propStyles) => ({
    fontFamily: FONTS.regular,
    fontSize: type ? TYPOGRAPHY[type] : TYPOGRAPHY['p'],
    ...propStyles
  }),
});
