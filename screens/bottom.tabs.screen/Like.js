import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
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
    <View style={styles.productCard}>
        <View style={styles.productView}>
            <TouchableOpacity style={styles.productImg}>
                <Image source={image} style={styles.productImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.crossImg}>
                {/* <Image source={require('../../assets/icons/close.png')} style={styles.crossImage} /> */}
                <Text style={styles.crossText}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCart}>
                <Image style={styles.addToCartImg} source={require('../../assets/icons/red_bag.png')} />
            </TouchableOpacity>
            
        </View>
        <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{title}</Text>
            <Text style={styles.productPrice}>{price}</Text>
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
    productCard: {
        width: 180,
        marginRight: 5,
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        shadowColor: '#000',
    },
    productImage: {
        width: '100%',
        height: 250,
        borderRadius: 12,
    },
    productInfo: {
        padding: 12,
    },
    productTitle: {
        fontSize: 18,
        fontFamily: "metropolis-medium",
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    productDescription: {
        fontSize: 12,
        fontFamily: "metropolis-regular",
        color: '#666',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 18,
        fontFamily: "metropolis-bold",
        color: 'black',
        fontStyle: "italic",
        fontWeight: 'light',
    },
    productView:{
        display: 'flex',
    },
    
    crossImg: {
        position: 'absolute',
        right: 10,
        top: 5,
        transform: [{ rotate: '0deg' }],
        
    },
    crossImage: {
        width: 30,
        height: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    crossText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        fontFamily: "sans-serif",
        
    },
    addToCart: {
        position: 'absolute',
        right: 10,
        bottom: -15,
        backgroundColor:'white',
        borderRadius: 50,
        padding: 10,
    },
    addToCartImg: {
        width: 25,
        height: 25,
    },
    
})