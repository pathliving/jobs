import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  logo: {
    height: SIZES.x40 * 2,
    width: SIZES.x40 * 2,
    borderRadius: SIZES.x12,
    marginBottom: SIZES.x12,
  },
  title: {
    marginBottom: SIZES.x12,
    textTransform: 'capitalize',
  },
  subtitle: {
    flexDirection: 'row',
  },
})