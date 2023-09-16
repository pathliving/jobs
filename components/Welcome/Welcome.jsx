import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Action from '../Action/Action';

const Welcome = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput style={styles.input} value={text} onChangeText={setText}/>
      <Action>search</Action>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#ccc'
  },
});
