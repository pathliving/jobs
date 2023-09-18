import React from 'react';
import Action from '../Action';
import {styles} from './styles';

const ActionRound = ({children, appearance, isOutlined, onPress, style: propStyles}) => {
  return (
    <Action appearance={appearance} onPress={onPress} isRound isOutlined={isOutlined}
            style={styles.action(propStyles)}>
      {children}
    </Action>
  );
};

export default ActionRound;
