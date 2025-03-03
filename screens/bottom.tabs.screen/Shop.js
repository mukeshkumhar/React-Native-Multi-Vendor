import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Shop = () => {
    return (
        <View style={styles.container}>
            <Text>Shop</Text>
        </View>
    )
}

export default Shop

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    }
})