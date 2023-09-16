import React from 'react';
import {FlatList} from 'react-native';
import Preloader from '../Preloader/Preloader';
import useFetch from '../../hooks/useFetch';
import Typography from '../Typography/Typography';

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
        renderItem={({item}) => <Typography>{item.job_title}</Typography>}
      />
    </Preloader>
  );
};

export default JobsList;
