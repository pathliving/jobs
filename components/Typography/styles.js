import {StyleSheet} from 'react-native';
import {FONTS, TYPOGRAPHY} from '../../constants/theme';

export const styles = StyleSheet.create({
  text: (size, type, propStyles) => ({
    fontFamily: type ?? FONTS.regular,
    fontSize: size ?? TYPOGRAPHY.p,
    ...propStyles
  }),
});