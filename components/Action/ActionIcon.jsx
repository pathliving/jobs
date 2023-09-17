import React from 'react';
import Icon from '../Icon/Icon';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

const ActionIcon = ({size, name, style: propStyles, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.actionIcon(propStyles)}
      onPress={onPress}
    >
      <Icon size={size} name={name} style={propStyles} />
    </TouchableOpacity>
  );
};

export default ActionIcon;

const styles = StyleSheet.create({
  actionIcon: (propStyles) => ({
    height: SIZES.x40,
    width: SIZES.x40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.x12,
    ...propStyles
  }),
})