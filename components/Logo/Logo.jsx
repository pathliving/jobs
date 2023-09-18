import React from 'react';
import {Image} from 'react-native';

const Logo = ({url, style: propStyles}) => {
  return (
    <Image
      resizeMode="contain"
      source={{uri: url ?? 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'}}
      style={propStyles}
    />
  );
};

export default Logo;