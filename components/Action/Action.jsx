import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';
import Typography from "../Typography/Typography";

const Action = ({children, type, style: propStyles}) => {
  return (
    <TouchableOpacity style={styles.action(type, propStyles)}>
      <Typography style={styles.typography(type)}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

export default Action;

const ACTION_TYPES = {
  PRIMARY: COLORS.primary,
  SECONDARY: COLORS.secondary,
  GHOST: COLORS.ghost,
  ACCENT: COLORS.accent,
  AZURE: COLORS.azure,
}

const styles = StyleSheet.create({
  action: (type, propStyles) => ({
    backgroundColor: type ? ACTION_TYPES[type] : ACTION_TYPES["ACCENT"],
    borderRadius: SIZES.x12,
    height: '100%',
    width: '100%',
    padding: 0,
    ...propStyles,
  }),
  typography: (type) => ({
    color: type === COLORS.azure ? COLORS.ghost : COLORS.white
  })
});
