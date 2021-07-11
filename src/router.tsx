import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import Indexing from './screens/Indexing';
import Tutorial from './screens/Tutorial';
import ChoiseTypeDoc from './screens/ChoiseTypeDoc';
import ChoiseSideDoc from './screens/ChoiseSideDoc';
import ChoiseHowSendPhoto from './screens/ChoiseHowSendPhoto';
import PhotoCapture from './screens/PhotoCapture';
import Success from './screens/Success';

const AppStack = createStackNavigator(
  {
    Home,
    Indexing,
    Tutorial,
    ChoiseTypeDoc,
    ChoiseSideDoc,
    ChoiseHowSendPhoto,
    PhotoCapture,
    Success,
  },
  { initialRouteName: 'Home', headerMode: 'none' }
);

const Router = createAppContainer(AppStack);

export default Router;
