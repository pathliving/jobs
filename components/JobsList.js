import React from 'react';
import {FlatList, Text} from 'react-native';
import Preloader from './Preloader';
import useFetch from '../hooks/useFetch';

const JobsList = () => {
  const {data, error, isLoading} = useFetch('search', {
    query: 'Python developer in Texas, USA',
    page: 1,
    num_pages: 1,
  });

  return (
    <Preloader isLoading={isLoading} error={error}>
      <FlatList
        data={data}
        renderItem={({item}) => <Text>{item.job_title}</Text>}
      />
    </Preloader>
  );
};

export default JobsList;
