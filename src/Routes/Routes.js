/**
 * Teqop Route/Component Tracking File
 * @author Meghna Malhotra
 * @format
 * @flow strict-local
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserDetail from '../Components/UserDetail';
import UserListing from '../Components/UserListing';
const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={'UserListing'}
        component={UserListing}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'UserDetail'}
        component={UserDetail}
      />
    </Stack.Navigator>
  );
};
const MainNavigator = () => {
  return <UserStack />;
};

export default MainNavigator;
