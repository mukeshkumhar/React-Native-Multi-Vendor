
import {ActivityIndicator, StatusBar,View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import AuthStack from './authentication/AuthStack';
import {AuthProvider, useAuth} from './authentication/useAuth';

const Navigation = () => {
  const {isAuthenticated, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#e32f45" />
      </View>
    );
  }
  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        {isAuthenticated ? <Tabs  /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider> 
  );
};

export default App;