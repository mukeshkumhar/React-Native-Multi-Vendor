import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const Sale = () => {
    return (
        <>
            <StatusBar hidden={false}
                backgroundColor="transparent"
                translucent={true}
                barStyle="dark-content" />
            <SafeAreaView style={styles.safeArea}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <ImageBackground source={require('../../assets/images/Smallbanner.png')} style={styles.banner} resizeMode="cover">
                            <View style={styles.overlay}><Text style={styles.bannerTitle}>Street clothes</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.productSection}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.title}>Sale</Text>
                                <Text style={styles.viewAll}>View All</Text>
                            </View>
                            <Text style={styles.sectionSubTitle}>Super Summer Sale</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </>
    )
}

export default Sale

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        marginBottom: 70,
    },
    container: {
        flex: 1,
    },
    // Poster image style
    banner: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 20,
        height: '100%',
        alignItems: 'bottom',
        justifyContent: 'flex-end',
    },
    // Poster title style
    bannerTitle: {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        width: '100%',
        fontFamily: "metropolis-black",
        textAlign: 'left',
    },
    productSection: {
        padding: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    title: {
        fontSize: 34,
        fontFamily: "metropolis-bold",
        fontWeight: 'bold',
        marginLeft: 0,
        marginTop: 0,
        color: '#000000',
    },
    viewAll: {
        fontSize: 14,
        marginRight: 15,
        marginTop: 0,
        fontFamily: "metropolis-medium",
        color: '#000000',
    },
    sectionSubTitle: {
        fontSize: 12,
        marginLeft: 0,
        marginBottom: 10,
        color: 'gray',
    },
})