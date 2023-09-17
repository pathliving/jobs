import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Action from '../Action/Action';
import Typography from "../Typography/Typography";
import {COLORS, FONTS, SIZES, TYPOGRAPHY} from "../../constants/theme";
import {icons} from "../../constants/DELETE_index";
import Icon from "../Icon/Icon";

const Welcome = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.welcome}>
      <View style={styles.intro}>
        <Typography appearance={TYPOGRAPHY.h3} type={FONTS.regular}>Hello, Andy!</Typography>
        <Typography appearance={TYPOGRAPHY.h2} type={FONTS.bold}>Find your dream job:</Typography>
      </View>
      <View style={styles.search}>
        <TextInput placeholder="e.g. react native developer" value={text} onChangeText={setText} style={styles.input}  />
        <Action style={styles.action}><Icon name={icons.search} size={24} style={styles.icon} /></Action>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcome: {
    marginHorizontal: SIZES.x12,
  },
  intro: {
    marginTop: SIZES.x40,
  },
  search: {
    flexDirection: 'row',
    height: 50,
    marginVertical: SIZES.x32,
  },
  input: {
    height: '100%',
    marginRight: SIZES.x8,
    borderWidth: 1,
    borderRadius: SIZES.x12,
    backgroundColor: COLORS.white,
    borderColor: 'transparent',
    fontSize: SIZES.x20,
    padding: SIZES.x12,
    flex: 1,
  },
  action: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: 0,
    padding: 0,
    tintColor: COLORS.white,
  },
});
