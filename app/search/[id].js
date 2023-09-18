import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useRouter} from 'expo-router';
import {COLORS, SIZES} from '../../constants/theme';
import ActionIcon from '../../components/Action/ActionIcon/ActionIcon';
import * as icons from '../../constants/icons';
import Header from '../../components/Header/Header';
import SearchResult from '../../components/Search/SearchResult';

const Search = () => {
    const router = useRouter();

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.search}>
            <Header
                headerLeft={
                    <ActionIcon
                        size={24}
                        name={icons.arrowLeft}
                        style={styles.icon}
                        onPress={() => router.back()}
                    />
                }
            />
            <SearchResult />
        </ScrollView>
    );
};

export default Search;

const styles = StyleSheet.create({
    search: {
        marginTop: SIZES.x12,
    },
    icon: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.x12,
    },
})