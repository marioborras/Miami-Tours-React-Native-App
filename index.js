/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

//Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import TourList from './src/components/TourList';
//create a component

const App = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <Header headerText={'Miami Tours'} />
    <TourList />
  </View>
);

//render that component to the device
AppRegistry.registerComponent('MiamiTours', () => App);
