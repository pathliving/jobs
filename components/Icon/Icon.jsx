import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {SIZES} from "../../constants/theme";

const Icon = ({size = 24, name, alt = 'icon', style: propStyles}) => {
  return (
    <Image
      source={name}
      alt={alt}
      style={styles.icon(size, propStyles)}
    />
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: (size, propStyles) => ({
    width: size,
    height: size,
    borderRadius: SIZES.x12,
    ...propStyles
  })
})
