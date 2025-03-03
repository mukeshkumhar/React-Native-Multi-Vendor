
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/tabs'

const App = () => {
  return (
    <>
    <StatusBar hidden = {true}/>
    <NavigationContainer >
      <Tabs/>
    </NavigationContainer>
  </>
  )
}

export default App

const styles = StyleSheet.create({})