import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Like = () => {
    return (
        <View style={styles.container}>
            <Text>Like Main</Text>
        </View>
    )
}

export default Like

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    }
})