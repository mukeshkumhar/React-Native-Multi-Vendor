import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, StyleSheet, Text, } from "react-native";
import Animated from "react-native-reanimated";
import Home from "../screens/bottom.tabs.screen/Home";
import Cart from "../screens/bottom.tabs.screen/Cart";
import Profile from "../screens/bottom.tabs.screen/Profile";
import Like from "../screens/bottom.tabs.screen/Like";
import Shop from "../screens/bottom.tabs.screen/Shop";



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false, //this will hide the action bar 
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    // borderRadius: 15,
                    height: 70,
                    ...styles.shadow,
                }
            }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 0, width: 50, }}>
                        <View style={{ width: 40, height: 4, top: 5, backgroundColor: focused ? '#e32f44' : '#ffffff', borderRadius: 20 }}></View>
                        <Image
                            source={focused ? require('../assets/icons/home.png') : require('../assets/icons/home1.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                top: 10,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        {focused && <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12, top: 10 }}>Home</Text>}
                    </View>
                ),
            }} />
            <Tab.Screen name="Shop" component={Shop} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 0, width: 50, }}>
                        <View style={{ width: 40, height: 4, top: 5, backgroundColor: focused ? '#e32f44' : '#ffffff', borderRadius: 20 }}></View>
                        <Image
                            source={focused ? require('../assets/icons/cartfill.png') : require('../assets/icons/cartline.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                top: 10,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        {focused && <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12, top: 10 }}>Shop</Text>}
                    </View>
                ),
            }}/>
            
            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 0, width: 50, }}>
                        <View style={{ width: 40, height: 4, top: 5, backgroundColor: focused ? '#e32f44' : '#ffffff', borderRadius: 20 }}></View>
                        <Image
                            source={focused ? require('../assets/icons/fill_bag.png') : require('../assets/icons/bag1.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                top: 10,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        {focused && <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12, top: 10 }}>Bag</Text>}
                    </View>
                ),
            }} />
            <Tab.Screen name="Like" component={Like} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 0, width: 50, }}>
                        <View style={{ width: 40, height: 4, top: 5, backgroundColor: focused ? '#e32f44' : '#ffffff', borderRadius: 20 }}></View>
                        <Image
                            source={focused ? require('../assets/icons/heartfill.png') : require("../assets/icons/heartline.png")}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                top: 10,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        {focused && <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12, top: 10 }}>Like</Text>}
                    </View>
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 0, width: 50, }}>
                        <View style={{ width: 40, height: 4, top: 5, backgroundColor: focused ? '#e32f44' : '#ffffff', borderRadius: 20 }}></View>
                        <Image
                            source={focused ? require('../assets/icons/profilefill.png') : require('../assets/icons/profileoutline.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                top: 10,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        {focused && <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12, top: 10 }}>Profile</Text>}
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        ishadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default Tabs;