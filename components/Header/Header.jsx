import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Stack} from 'expo-router';
import Typography from '../Typography/Typography';

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
            onPress={() => {}}><Typography>menu</Typography></TouchableOpacity>,
          headerRight: () => <TouchableOpacity
            style={{height: 40, width: 40, justifyContent: "center", alignItems: "center"}}
            color="#000"
            onPress={() => {}}><Typography>avatar</Typography></TouchableOpacity>,
        }}
      />
      <Typography style={{color: '#333'}}>head</Typography>
    </SafeAreaView>
  );
}

export default Header;
