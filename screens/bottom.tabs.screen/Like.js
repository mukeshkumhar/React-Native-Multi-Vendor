import { SafeAreaView, ScrollView, StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const product = [
    {
        id: 1,
        title: 'Product 1',
        price: '$99.99',
        image: require('../../assets/images/photo1.png'),
        liked: true,
    },
    {
        id: 2,
        title: 'Product 1',
        price: '$99.99',
        image: require('../../assets/images/photo1.png'),
        liked: false,
    },
    {
        id: 3,
        title: 'Product 1',
        price: '$99.99',
        image: require('../../assets/images/photo1.png'),
        liked: false,
    },
    {
        id: 4,
        title: 'Product 1',
        price: '$99.99',
        image: require('../../assets/images/photo1.png'),
        liked: false,
    },
]

const ProductCard = ({ title, price, image, liked }) => (
    <View>
        <TouchableOpacity style={styles.productImg}>
            <Image source={image} style={styles.productImage} />
        </TouchableOpacity>
        <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{title}</Text>
            <Text style={styles.productPrice}>{price}</Text>
        </View>
        <View>
            <TouchableOpacity style={styles.crossImg}>
                <Image source={require('../../assets/icons/close.png')} style={styles.crossImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCart}></TouchableOpacity>
        </View>
    </View >
);

const Like = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <View style={styles.header}><Text style={styles.headerText}>Favorites</Text></View>
                    <View style={styles.container}>
                        {product.map((item) => (
                            <ProductCard key={item.id} {...item} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Like

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 50,
    },
    header: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#F5F5F5',
    },
})