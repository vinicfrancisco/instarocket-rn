import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Image } from 'react-native';

import { Feed, New } from './pages';

import Logo from './assets/logo.png';

export default createAppContainer(
  createStackNavigator(
    {
      Feed,
      New,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#000',
        headerTitle: <Image style={{ marginHorizontal: 20 }} source={Logo} />,
        headerBackTitle: null,
      },
      mode: 'modal',
    },
  ),
);
