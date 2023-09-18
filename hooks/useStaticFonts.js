import {useFonts} from 'expo-font';
import {FONTS} from '../constants/theme';

const useStaticFonts = () => {
    const [fontsLoaded, fontError] = useFonts({
        [FONTS.regular]: require('../assets/fonts/DMSans-Regular.ttf'),
        [FONTS.medium]: require('../assets/fonts/DMSans-Medium.ttf'),
        [FONTS.bold]: require('../assets/fonts/DMSans-Bold.ttf'),
    });

    return [
        fontsLoaded,
        fontError,
    ]
};

export default useStaticFonts;
