import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './src/pages/Home';
import Notifications from './src/pages/Notifications';
import Settings from './src/pages/Settings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SavingsSummary from './src/pages/Savings/Summary';
import SavingsEntry from './src/pages/Savings/Entry';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Screen name="Savings Summary" component={SavingsSummary} />
        <Stack.Screen name="Savings Entry" component={SavingsEntry} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({color, size }) => {
            let iconName: 'home-outline' | 'alert-circle-outline' | 'settings-outline' = 'alert-circle-outline';

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Alert') {
              iconName = 'alert-circle-outline' ;
            } else if (route.name === 'Settings') {
              iconName = 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notifications" component={Notifications}  options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}