import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useGlobalSearchParams, useRouter} from 'expo-router';
import ActionIcon from '../../components/Action/ActionIcon/ActionIcon';
import Header from '../../components/Header/Header';
import Tabs from '../../components/Tabs/Tabs';
import Footer from '../../components/Footer/Footer';
import Intro from '../../components/Intro/Intro';
import useFetch from '../../hooks/useFetch';
import {COLORS, SIZES} from '../../constants/theme';
import * as icons from '../../constants/icons';
import Preloader from "../../components/Preloader/Preloader";

const Search = () => {
    const router = useRouter();
    const params = useGlobalSearchParams();
    const {data, error, isLoading} = useFetch('job-details', {
        job_id: params.id,
    });

    return (
        <View style={styles.job}>
            <Header
                headerLeft={
                    <ActionIcon
                        size={24}
                        name={icons.arrowLeft}
                        appearance={COLORS.white}
                        style={styles.icon}
                        onPress={() => router.back()}
                    />
                }
                headerRight={
                    <ActionIcon
                        size={24}
                        name={icons.share}
                        appearance={COLORS.white}
                        style={styles.icon}
                        onPress={() => {}}
                    />
                }
            />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.details}>
                <Preloader isLoading={isLoading} error={error}>
                    <Intro job={data[0]} />
                    <Tabs job={data[0]} />
                </Preloader>
            </ScrollView>
            <Footer job={data[0]} />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    job: {
        backgroundColor: COLORS.tundra,
    },
    icon: {
        borderRadius: SIZES.x12,
    },
    details: {
        paddingTop: SIZES.x32,
        marginVertical: SIZES.x12,
        marginHorizontal: SIZES.x12,
        marginBottom: SIZES.x32 * 2,
        height: '100%',
    },
})
