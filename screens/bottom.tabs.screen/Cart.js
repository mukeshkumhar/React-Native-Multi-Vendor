import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'


const product = [
    {
        id: 1,
        title: 'Product 1',
        price: '$99.99',
        image: require('../../assets/images/photo1.png'),
        quantity: 2,
    },
    {
        id: 2,
        title: 'Product 2',
        price: '$99.99',
        image: require('../../assets/images/photo1.png'),
        quantity: 1,
    },
    {
        id: 3,
        title: 'Product 2',
        price: '$99.99',
        image: require('../../assets/images/photo1.png'),
        quantity: 1,
    },
];

const ProductItem = ({ title, price, image, quantity }) => (
    <View style={styles.productItem}>
        <Image style={styles.productImage} source={image} />
        <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{title}</Text>
            <View style={styles.productQuantity1}>
                <View style={styles.productQuantity}>
                    <Image source={require('../../assets/icons/subtract.png')} style={styles.icon} />
                    <Text style={styles.quantity}>{quantity}</Text>
                    <Image source={require('../../assets/icons/plus.png')} style={styles.icon} />
                </View>
                <Text style={styles.productPrice}>{price}</Text>
            </View>
        </View>
    </View>
);

const Cart = () => {
    const [couponCode, setCouponCode] = useState('');
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.headerText}>My Bag</Text>
                    <View style={styles.ItemCard}>
                        {product.map((item) => (
                            <ProductItem key={item.id} {...item} />
                        ))}
                    </View>
                    <View style={styles.couponContainer}>
                        <TextInput
                            style={styles.couponInput}
                            placeholder="Enter your promo code"
                            value={couponCode}
                            onChangeText={setCouponCode}
                        />
                        <TouchableOpacity style={styles.applyButton}>
                            <Image source={require('../../assets/icons/blackright.png')} style={{ width: 45, height: 45 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomItems}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20, marginLeft: 20, marginRight: 30 }}>
                            <Text style={styles.total}>Total amount:</Text>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>$199.98</Text>
                        </View>
                        <TouchableOpacity style={styles.checkoutButton}>
                            <Text style={styles.checkoutText}>Check out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    headerText: {
        fontSize: 34,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 70,
    },
    ItemCard: {
        marginLeft: 10,
        marginRight: 10,
    },
    productItem: {
        flexDirection: 'row',
        width: "100%",
        marginRight: 5,
        marginTop: 20,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        shadowColor: '#000',
        borderRadius: 12,
    },
    productImage: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    productInfo: {
        marginLeft: 10,

    },
    productTitle: {
        fontSize: 18,
        marginLeft: 10,
        marginTop: 10,
        fontWeight: 'bold',
    },
    productQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productQuantity1: {
        flexDirection: 'row',
        width: '80%',
        marginTop: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quantity: {
        marginLeft: 10,
    },
    icon: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 50,
        marginLeft: 10,
        shadowColor: '#000000',
        // shadowOffset: {
        //     width: 5,
        //     height: 5,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 2.22,
        elevation: 2,
    },
    productPrice: {
        alignItems: 'flex-end',
    },
    couponContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    couponInput: {
        flex: 1,
        height: 45,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginRight: 0,
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,

    },
    applyButton: {
        marginLeft: -15,
    },
    checkoutButton: {
        backgroundColor: '#cb4335',
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    checkoutText: {
        color: '#fff',
        fontSize: 16,
        width: '90%',
        textAlign: 'center',
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
})