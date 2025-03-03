import { StyleSheet, Text, View, Image, ScrollView,ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'


const productData = [
    {
        id: 1,
        title: 'Product 1',
        price: '$99.99',
        image: require('../../assets/images/photo1.png'),
        description: 'New Collection'
    },
    {
        id: 2,
        title: 'Product 2',
        price: '$89.99',
        image: require('../../assets/images/photo.jpg'),
        description: 'New Arrival'
    },
    {
        id: 3,
        title: 'Product 2',
        price: '$89.99',
        image: require('../../assets/images/photo.jpg'),
        description: 'New Arrival'
    },
    // Add more products as needed
];

const ProductCard = ({ title, price, image, description }) => (
    <TouchableOpacity style={styles.productCard}>
        <Image source={image} style={styles.productImage} />
        <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{title}</Text>
            <Text style={styles.productDescription}>{description}</Text>
            <Text style={styles.productPrice}>{price}</Text>
        </View>
    </TouchableOpacity>
);

const ProductShow=({ title, price, image, description}) => (
    <TouchableOpacity style={styles.productCard1}>
        <Image style={styles.productImage1} source={image} />
        <View style={styles.productInfo1}>
            <Text style={styles.productTitle1}>{title}</Text>
            <Text style={styles.productDescription1}>{description}</Text>
            <Text style={styles.productPrice1}>{price}</Text>
        </View>
    </TouchableOpacity>
)
const Home = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../../assets/images/BigBanner.jpg')} // Make sure to add your image
                        style={styles.banner}
                        resizeMode="cover"
                    >
                        <View style={styles.overlay}>
                            <Text style={styles.bannerTitle}>Fashion sale</Text>
                            <TouchableOpacity style={styles.button} onPress={() => { }}>
                                <Text style={styles.buttonText}>Check</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    {/* Add more content here */}
                    <View style={styles.productSection}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>New</Text>
                            <TouchableOpacity onPress={() => {/* Add your navigation logic here */ }}>
                                <Text style={styles.viewAll}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <Text style={styles.sectionSubTitle}>You've never seen it before! </Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.productList}
                        >
                            {productData.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </ScrollView>
                    </View>
                    <View style={styles.productSuggetionGrid}>
                        {productData.map((product) => (
                            <ProductShow key={product.id} {...product} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

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
        height: 500,
        width: '100%',
        justifyContent: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: 20,
        height: '100%',
        alignItems: 'bottom',
        justifyContent: 'flex-end',
    },
    // Poster title style
    bannerTitle: {
        color: '#ffffff',
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 10,
        width: '70%',
        fontFamily: "metropolis-black",
        textAlign: 'left',
    },
    button: {
        backgroundColor: '#e32f45',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
        width: '40%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
    },
    contentText: {
        fontSize: 16,
        color: '#333',
    },
    // Heading styles New
    productSection: {
        padding: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    sectionTitle: {
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
        marginLeft: 10,
        marginBottom: 10,
        color: 'gray',
    },
    // Product styles for Horizontal Scroll 
    productList: {
        paddingVertical: 10,
        marginLeft: 0,
    },
    productCard: {
        width: 160,
        marginRight: 15,
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
    productImage: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        // borderTopLeftRadius: 12,
        // borderTopRightRadius: 12,
    },
    productInfo: {
        padding: 12,
    },
    productTitle: {
        fontSize: 16,
        fontFamily: "metropolis-medium",
        color: '#333',
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
        color: '#e32f45',
    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    // Product suggestion Grid 
    productSuggetionGrid:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    productCard1: {
        width: 180,
        marginRight: 5,
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
    productImage1: {
        width: '100%',
        height: 250,
        borderRadius: 12,
        // borderTopLeftRadius: 12,
        // borderTopRightRadius: 12,
    },
    productInfo1: {
        padding: 12,
    },
    productTitle1: {
        fontSize: 18,
        fontFamily: "metropolis-medium",
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    productDescription1: {
        fontSize: 12,
        fontFamily: "metropolis-regular",
        color: '#666',
        marginBottom: 4,
    },
    productPrice1: {
        fontSize: 18,
        fontFamily: "metropolis-bold",
        color: '#e32f45',
    },
})
export default Home

