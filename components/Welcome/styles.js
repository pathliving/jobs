import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  welcome: {
    marginHorizontal: SIZES.x12,
  },
  intro: {
    marginTop: SIZES.x40,
  },
  search: {
    flexDirection: 'row',
    height: SIZES.x24 * 2,
    marginVertical: SIZES.x32,
  },
  input: {
    height: '100%',
    marginRight: SIZES.x8,
    borderWidth: 1,
    borderRadius: SIZES.x12,
    backgroundColor: COLORS.white,
    borderColor: 'transparent',
    fontSize: SIZES.x16,
    padding: SIZES.x12,
    flex: 1,
  },
  action: {
    width: SIZES.x24 * 2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: 0,
    padding: 0,
  },
});