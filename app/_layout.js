import {Slot} from 'expo-router';
import {useFonts} from 'expo-font';
import {FONTS} from '../constants/theme';
import getFont from '../helpers/getFont';

const Layout = () => {
  const [fontsLoaded, fontError] = useFonts({
    [FONTS.regular]: getFont('DMSans-Regular', 'ttf'),
    [FONTS.medium]: getFont('DMSans-Medium', 'ttf'),
    [FONTS.bold]: getFont('DMSans-Bold', 'ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Slot />
  )
};

export default Layout;
