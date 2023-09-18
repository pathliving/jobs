import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 75,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    padding: SIZES.x12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    flex: 1,
    padding: SIZES.x12,
    marginLeft: SIZES.x8,
  },
})