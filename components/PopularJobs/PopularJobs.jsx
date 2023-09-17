import React from 'react';
import Typography from "../Typography/Typography";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {COLORS, FONTS, SIZES, TYPOGRAPHY} from "../../constants/theme";
import {useRouter} from "expo-router";

const PopularJobs = ({children}) => {
    const router = useRouter();

    return (
        <View>
            <View style={styles.popularJobs}>
                <Typography appearance={TYPOGRAPHY.h3} type={FONTS.medium}>Popular jobs</Typography>
                <TouchableOpacity onPress={() => router.push('/search/all')}>
                    <Typography appearance={TYPOGRAPHY.p} type={FONTS.regular} style={styles.more}>Show all</Typography>
                </TouchableOpacity>
            </View>
            {children}
        </View>
    );
};

export default PopularJobs;

const styles = StyleSheet.create({
    popularJobs: {
        marginHorizontal: SIZES.x12,
        marginBottom: SIZES.x12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    more: {
        color: COLORS.ghost,
    }
})