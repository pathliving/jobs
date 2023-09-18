import React from 'react';
import Icon from '../../Icon/Icon';
import Action from '../Action';
import {styles} from './styles';

const ActionIcon = ({size, appearance, name, isOutlined, color, onPress, style: propStyles}) => {
  return (
    <Action
      appearance={appearance}
      isOutlined={isOutlined}
      onPress={onPress}
      style={styles.actionIcon(isOutlined, propStyles)}
      icon={<Icon size={size} name={name} color={color} style={propStyles} />}
    />
  );
};

export default ActionIcon;
