import {SafeAreaView} from 'react-native';
import {Stack} from 'expo-router';
import {COLORS} from '../../constants/theme';
import {styles} from './styles';

const Header = ({headerLeft, headerRight}) => {
  return (
    <SafeAreaView style={styles.header}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.tundra,
          },
          headerLeft: () => headerLeft,
          headerRight: () => headerRight,
        }}
        style={styles.header}
      />
    </SafeAreaView>
  );
}

export default Header;
