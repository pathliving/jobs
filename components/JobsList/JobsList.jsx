import React from 'react';
import {FlatList, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useRouter} from 'expo-router';
import Preloader from '../Preloader/Preloader';
import useFetch from '../../hooks/useFetch';
import Typography from '../Typography/Typography';
import {COLORS, SIZES} from '../../constants/theme';

const JobsList = () => {
  const router = useRouter();
  const {data, error, isLoading} = useFetch('search', {
    query: 'Python developer in Texas, USA',
    page: 1,
    num_pages: 1,
  });

  return (
    <Preloader isLoading={isLoading} error={error}>
      <FlatList
        data={data}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => router.push(`/job/${item.job_id}`)}>
                <View style={styles.card}>
                    <Image
                      resizeMode="contain"
                      source={{uri: item.employer_logo ?? 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'}}
                      style={styles.logo}
                    />
                    <View style={styles.description}>
                      <Typography>{item.employer_name}</Typography>
                      <Typography>{item.job_title}</Typography>
                      <Typography>{item.job_city}, {item.job_state}</Typography>
                    </View>
                </View>
            </TouchableOpacity>
        )}
      />
    </Preloader>
  );
};

export default JobsList;

const styles = StyleSheet.create({
    card: {
        marginHorizontal: SIZES.x12,
        marginBottom: SIZES.x12,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.x12,
        paddingVertical: SIZES.x16,
        borderRadius: SIZES.x12,
        flexDirection: 'row',
    },
    logo: {
        height: 50,
        width: 50,
        marginRight: SIZES.x12,
    },
    description: {
        flex: 1,
    }
})