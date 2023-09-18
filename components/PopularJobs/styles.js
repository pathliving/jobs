import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  popularJobs: {
    marginHorizontal: SIZES.x12,
    marginBottom: SIZES.x12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  more: {
    color: COLORS.ghost,
  }
})