import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import WelcomeScreen from '@screens/WelcomeScreen';
import LoginScreen from '@screens/LoginScreen';
import HomeScreen from '@screens/HomeScreen';
import MessagesScreen from '@screens/MessagesScreen';
import ProfileScreen from '@screens/ProfileScreen';
import AppointmentsScreen from '@screens/AppointmentsScreen';
import FindDoctorScreen from '@screens/FindDoctorScreen';
import colors from '@theme/colors';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  MainTabs: undefined;
  FindDoctor: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: { height: 64, paddingBottom: 8 },
        tabBarIcon: ({ color, size }) => {
          const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
            Home: 'home',
            Messages: 'chatbubbles',
            Appointments: 'calendar',
            Notifications: 'notifications',
            Profile: 'person'
          };
          const iconName = iconMap[route.name] || 'ellipse';
          return <Ionicons name={iconName as any} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
      <Tab.Screen name="Notifications" component={AppointmentsScreen} options={{
        // Reuse placeholder for notifications for now
        title: 'Alerts'
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="FindDoctor" component={FindDoctorScreen} options={{ title: '', headerBackTitleVisible: false }} />
    </Stack.Navigator>
  );
}
