import React from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';

import Header from './components/header/Header';
import Content from './components/content/Content';

import styles from './styles/App';

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <Header/>
      <Content/>
    </SafeAreaView>
  );
}

