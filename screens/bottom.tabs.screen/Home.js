import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, onPress, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { productService } from '../../services/productService';


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

const ProductCard = ({ title, price, images, description, onPress }) => {
    const [imageError, setImageError] = useState(false);
    const defaultImage = require('../../assets/images/image_not_found.png');

    const imageUrl = images && images.length > 0 ? images[0].url : null;
    return (
        <TouchableOpacity style={styles.productCard} onPress={onPress}>
            <Image
                source={imageUrl ? { uri: imageUrl } : defaultImage}
                style={styles.productImage}
                onError={() => setImageError(true)}
                resizeMode="cover" />
            <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{title}</Text>
                <Text style={styles.productDescription}>{description}</Text>
                <Text style={styles.productPrice}>{price}</Text>
            </View>
        </TouchableOpacity>
    );
};

const ProductShow = ({ title, price, images, description, onPress }) => {
    const [imageError, setImageError] = useState(false);
    const defaultImage = require('../../assets/images/image_not_found.png');
    console.log('Images received:', images);

    const imageUrl = images && images.length > 0 ? images[0].url : null;
    console.log("Image URL: " + imageUrl);
    return (
        <TouchableOpacity style={styles.productCard1} onPress={onPress}>
            <Image
                source={imageUrl ? { uri: imageUrl } : defaultImage}
                style={styles.productImage1}
                onError={() => setImageError(true)}
                resizeMode="cover" />
            <View style={styles.productInfo1}>
                <Text style={styles.productTitle1}>{title}</Text>
                <Text style={styles.productDescription1}>{description}</Text>
                <Text style={styles.productPrice1}>{price}</Text>
            </View>
        </TouchableOpacity>
    );
};
const Home = () => {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await productService.getAllProducts();
            if (response.success) {
                console.log('Products:', response.data);
                setProducts(response.data);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            setError('Failed to load products');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#e32f45" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <>
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
                                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sale')}>
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
                                {products.map((product) => (
                                    <ProductCard
                                        key={product._id}
                                        title={product.name}
                                        price={product.price}
                                        images={product.images}
                                        description={product.description}
                                        onPress={() => navigation.navigate('Product', { productId: product._id })}
                                    />
                                ))}
                            </ScrollView>
                        </View>
                        <View style={styles.productSuggetionGrid}>
                            {products.map((product) => (
                                <ProductShow
                                    key={product._id}
                                    title={product.name}
                                    price={product.price}
                                    images={product.images}
                                    description={product.description}
                                    onPress={() => navigation.navigate('Product', { productId: product._id })}
                                />
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const additionalStyles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        color: '#e32f45',
        fontSize: 16,
        textAlign: 'center',
    }
});

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        marginBottom: 70,
    },
    container: {
        flex: 1,
        marginBottom: 20,
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
        marginLeft: 0,
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
        backgroundColor: '#ffffff',
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
    productSuggetionGrid: {
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
    ...additionalStyles
})
export default Home

