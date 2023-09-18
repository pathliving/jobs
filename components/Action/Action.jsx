import React from 'react';
import {TouchableOpacity} from 'react-native';
import Typography from '../Typography/Typography';
import {styles} from './styles';

const Action = ({
  children,
  icon,
  appearance,
  size,
  type,
  onPress,
  isRound,
  isOutlined,
  style: propStyles
}) => {
  return (
    <TouchableOpacity
      style={styles.action(appearance, isRound, isOutlined, propStyles)}
      onPress={onPress}
    >
      {icon}
      {children && (
        <Typography size={size} type={type} style={styles.typography(appearance)}>
          {children}
        </Typography>
      )}
    </TouchableOpacity>
  );
};

export default Action;
