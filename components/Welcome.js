import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

const Welcome = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput style={styles.input} value={text} onChangeText={setText}/>
      <Button title="search"/>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
