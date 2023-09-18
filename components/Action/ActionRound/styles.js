import {StyleSheet} from 'react-native';
import {SIZES} from '../../../constants/theme';

export const styles = StyleSheet.create({
  action: (appearance, propStyles) => ({
    height: SIZES.x24 * 2,
    padding: SIZES.x12,
    ...propStyles,
  }),
});