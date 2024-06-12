import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainPage from './MainPage';
import BOLO from './BOLO';
import ContactHistory from './ContactHistory';
import TrespassRecords from './TrespassRecords';
import WantedRecors from './WantedRecord';


const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.Title}>ISIS</Text>
        <Text style={styles.Title1}>Integrated Suspect Identification System</Text>
        <StatusBar style="light" />
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
          <Stack.Screen name="BOLO" component={BOLO} options={{ headerShown: false }} />
          <Stack.Screen name="TrespassRecords" component={TrespassRecords} options={{ headerShown: false }} />
          <Stack.Screen name="WantedRecord" component={WantedRecors} options={{ headerShown: false }} />
          <Stack.Screen name="ContactHistory" component={ContactHistory} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A21',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 30,
    color: 'white',
    marginLeft: 150
  },
  Title1: {
    color: '#94ADC7',
    fontSize: 20
  },
});
