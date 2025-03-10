import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native'
import React from 'react'
import { useAuth } from '../../authentication/useAuth';

const Profile = () => {
    const { logout, userData } = useAuth();

    const handleLogout =  () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    onPress: async () => {
                        try {
                            console.log('Logging out...',userData?.email);
                            await logout();
                        } catch (error) {
                            console.error('Logout error:', error);
                            Alert.alert('Error', 'Failed to logout. Please try again.');
                        }
                    },
                    style: 'destructive',
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.titleTxt}>My Profile</Text>
                    <View style={styles.profileCard}>
                        <Image source={require('../../assets/images/photo1.png')} style={styles.profileImg} />
                        <View style={styles.profileInfo}>
                            <Text style={styles.userName}>{userData?.name || 'User Name'}</Text>
                            <Text style={styles.userEmail}>{userData?.email || 'email@example.com'}</Text>
                        </View>
                    </View>
                    <View style={styles.listCard}>
                        <View style={styles.listCardTxt}>
                            <Text style={styles.nameOfList}>My Orders</Text>
                            <Text style={styles.nameOfSubList}>Already have 12 orders</Text>
                        </View>
                        <Image source={require('../../assets/icons/blackright.png')} style={styles.arrowImg} />
                    </View>
                    <View style={styles.listCard}>
                        <View style={styles.listCardTxt}>
                            <Text style={styles.nameOfList}>Shipping addresses</Text>
                            <Text style={styles.nameOfSubList}>3 Addresses</Text>
                        </View>
                        <Image source={require('../../assets/icons/blackright.png')} style={styles.arrowImg} />
                    </View>
                    <View style={styles.listCard}>
                        <View style={styles.listCardTxt}>
                            <Text style={styles.nameOfList}>Payment methods</Text>
                            <Text style={styles.nameOfSubList}>Visa **34</Text>
                        </View>
                        <Image source={require('../../assets/icons/blackright.png')} style={styles.arrowImg} />
                    </View>
                    <View style={styles.listCard}>
                        <View style={styles.listCardTxt}>
                            <Text style={styles.nameOfList}>Promocodes</Text>
                            <Text style={styles.nameOfSubList}>You have spacial promocode</Text>
                        </View>
                        <Image source={require('../../assets/icons/blackright.png')} style={styles.arrowImg} />
                    </View>
                    <View style={styles.listCard}>
                        <View style={styles.listCardTxt}>
                            <Text style={styles.nameOfList}>Settings</Text>
                            <Text style={styles.nameOfSubList}>Password, Notification</Text>
                        </View>
                        <Image source={require('../../assets/icons/blackright.png')} style={styles.arrowImg} />
                    </View>
                    <TouchableOpacity onPress={handleLogout}>
                        <View style={styles.listCard}>
                            <View style={styles.listCardTxt}>
                                <Text style={styles.nameOfList}>Logout</Text>
                            </View>
                            <Image source={require('../../assets/icons/blackright.png')} style={styles.arrowImg} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 50,
        backgroundColor: '#F5F5F5',
    },
    titleTxt: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profileCard: {
        flexDirection: 'row',
        marginBottom: 40,
        marginTop: 10,
    },
    profileImg: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    profileInfo: {
        marginLeft: 20,
        marginTop: 5,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 12,
        color: '#333',
    },
    listCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        // backgroundColor: '#ffffff',
        boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
        borderRadius: 12,
    },
    listCardTxt: {
        flexDirection: 'column',
    },
    nameOfList: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    nameOfSubList: {
        fontSize: 12,
        color: 'gray',
    },
    arrowImg: {
        width: 35,
        height: 35,
    },


})