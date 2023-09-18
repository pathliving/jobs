import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  icon: (size, color, propStyles) => ({
    width: size,
    height: size,
    borderRadius: SIZES.x12,
    tintColor: color,
    padding: SIZES.x8,
    ...propStyles
  })
})
