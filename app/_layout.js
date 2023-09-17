import {Stack} from 'expo-router';
import useStaticFonts from '../hooks/useStaticFonts';

const Layout = () => {
  const [fontsLoaded, fontError] = useStaticFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" />
    </Stack>
  )
};

export default Layout;
