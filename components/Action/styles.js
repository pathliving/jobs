import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  action: (appearance, isRound, isOutlined, propStyles) => ({
    ...(isOutlined ? {
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: appearance ?? COLORS.accent,
      tintColor: appearance ?? COLORS.accent,
    } : {
      backgroundColor: appearance ?? COLORS.accent,
      tintColor: COLORS.white,
    }),
    borderRadius: isRound ? '50%' : SIZES.x12,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    ...propStyles,
  }),
  typography: (appearance) => ({
    color: appearance === COLORS.azure ? COLORS.ghost : COLORS.white
  }),
})
