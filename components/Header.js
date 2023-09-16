import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {Stack} from 'expo-router';

const Header = () => {
  return (
    <SafeAreaView style={{flex: 1, height: 40}}>
      <Stack.Screen
        style={{display: 'flex', flex: 1, height: 40, width: '100%'}}
        options={{
          headerTitle: '',
          headerLeft: () => <TouchableOpacity
            style={{height: 40, width: 40, justifyContent: "center", alignItems: "center"}}
            color="#000"
            onPress={() => {}}>menu</TouchableOpacity>,
          headerRight: () => <TouchableOpacity
            style={{height: 40, width: 40, justifyContent: "center", alignItems: "center"}}
            color="#000"
            onPress={() => {}}>avatar</TouchableOpacity>,
        }}
      />
      <Text style={{color: '#333'}}>head</Text>
    </SafeAreaView>
  );
}

export default Header;
