import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Action from '../Action/Action';
import Typography from '../Typography/Typography';
import {COLORS, FONTS, TYPOGRAPHY} from '../../constants/theme';
import * as icons from '../../constants/icons';
import Icon from '../Icon/Icon';
import {useRouter} from 'expo-router';
import {styles} from './styles';

const Welcome = () => {
  const [text, setText] = useState('');
  const router = useRouter();

  return (
    <View style={styles.welcome}>
      <View style={styles.intro}>
        <Typography size={TYPOGRAPHY.h3} type={FONTS.regular}>Hello, Andy!</Typography>
        <Typography size={TYPOGRAPHY.h2} type={FONTS.bold}>Find your dream job:</Typography>
      </View>
      <View style={styles.search}>
        <TextInput
          placeholder="e.g. react native developer"
          value={text}
          onChangeText={setText}
          style={styles.input}
        />
        <Action style={styles.action} onPress={() => router.push(`/search/${text}`)}><Icon
          name={icons.search} size={24} color={COLORS.white} style={styles.icon}/></Action>
      </View>
    </View>
  );
};

export default Welcome;
