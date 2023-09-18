import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  card: {
    marginHorizontal: SIZES.x12,
    marginBottom: SIZES.x12,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.x12,
    paddingVertical: SIZES.x16,
    borderRadius: SIZES.x12,
    flexDirection: 'row',
  },
  logo: {
    height: SIZES.x24 * 2,
    width: SIZES.x24 * 2,
    marginRight: SIZES.x12,
  },
  description: {
    flex: 1,
  }
})
