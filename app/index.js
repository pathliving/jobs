import {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';
import Welcome from '../components/Welcome';
import JobsList from "../components/JobsList";

export default function Page() {
  return (
    <View>
      <Text>Header</Text>
      <Header/>
      <Welcome />
      <Text>Body</Text>
      <JobsList />
    </View>
  );
}
