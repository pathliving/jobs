import React from 'react';
import {Image} from 'react-native';
import {styles} from './styles';

const Icon = ({size = 24, name, color, alt = 'icon', style: propStyles}) => {
  return (
    <Image
      source={name}
      resizeMode="contain"
      alt={alt}
      style={styles.icon(size, color, propStyles)}
    />
  );
};

export default Icon;
