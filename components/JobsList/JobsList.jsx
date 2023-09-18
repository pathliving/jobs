import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {useRouter} from 'expo-router';
import Preloader from '../Preloader/Preloader';
import useFetch from '../../hooks/useFetch';
import Typography from '../Typography/Typography';
import Logo from '../Logo/Logo';
import {styles} from './styles';

const JobsList = ({query}) => {
  const router = useRouter();
  const {data, error, isLoading} = useFetch('search', {
    query: query ?? 'Python developer, USA',
  });

  return (
    <Preloader isLoading={isLoading} error={error}>
      {data.map((item) => (
        <TouchableOpacity onPress={() => router.push(`/job/${item.job_id}`)} key={item.job_id}>
          <View style={styles.card}>
            <Logo url={item.employer_logo} style={styles.logo} />
            <View style={styles.description}>
              <Typography>{item.employer_name}</Typography>
              <Typography>{item.job_title}</Typography>
              {item.job_city && item.job_state && (
                <Typography>{item.job_city}, {item.job_state}</Typography>
              )}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </Preloader>
  );
};

export default JobsList;
