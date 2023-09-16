import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants/theme';
import Typography from "../Typography/Typography";

const Action = ({children, type}) => {
  return (
    <TouchableOpacity style={styles.action(type)}>
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
  action: (type) => ({
    fontFamily: FONTS.regular,
    fontSize: 20,
    backgroundColor: type ? ACTION_TYPES[type] : ACTION_TYPES["ACCENT"],
    borderRadius: SIZES.x4,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  typography: (type) => ({
    color: type === COLORS.azure ? COLORS.ghost : COLORS.white
  })
});
