import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default class AppContainer extends Component {
  render() {
    return <RootStack />;
  }
}
