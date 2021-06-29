import * as React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'

export default function App() {
    return (
      <AppContainer/>
    )
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  Drawer: {screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
},
{
  initialRouteName : 'WelcomeScreen' 
})

const AppContainer = createAppContainer(switchNavigator);