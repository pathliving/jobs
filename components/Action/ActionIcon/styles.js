import {StyleSheet} from 'react-native';
import {SIZES} from '../../../constants/theme';

export const styles = StyleSheet.create({
  actionIcon: (isOutlined, propStyles) => ({
    height: SIZES.x40,
    width: SIZES.x40,
    borderRadius: SIZES.x12,
    ...propStyles
  }),
})
