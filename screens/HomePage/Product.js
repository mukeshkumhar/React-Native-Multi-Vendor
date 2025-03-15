import {
    ScrollView,
    SafeAreaView,
    SafeAreaViewBase,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ActivityIndicator,
    StatusBar,
    Platform,
    TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { productService } from '../../services/productService';
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Product = ({ route }) => {
    const { productId } = route.params;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [imageLoading, setImageLoading] = useState(true);

    useEffect(() => {
        fetchProduct();
    }, [productId]);

    const fetchProduct = async () => {
        try {
            const response = await productService.getProductById(productId);
            if (response.success) {
                setProduct(response.data);
            }
        } catch (error) {
            console.error('Error fetching product:', error);
            setError('Failed to load product details');
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

    if (error || !product) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error || 'Product not found'}</Text>
            </View>
        );
    }



    return (
        <>
            <StatusBar hidden={false}
                backgroundColor="white"
                translucent={false}
                barStyle="dark-content" />
            <SafeAreaView style={styles.safeArea}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <View style={styles.imageSlider}>
                            <ScrollView
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                onMomentumScrollEnd={(e) => {
                                    const slide = Math.round(
                                        e.nativeEvent.contentOffset.x / width
                                    );
                                    setActiveSlide(slide);
                                }}
                            >
                                {product.images.map((image, index) => (
                                    <View key={index} style={styles.slide}>
                                        {imageLoading && (
                                            <ActivityIndicator
                                                style={styles.imageLoader}
                                                size="large"
                                                color="#e32f45"
                                            />
                                        )}
                                        <Image
                                            source={{ uri: image.url }}
                                            style={styles.image}
                                            onLoadStart={() => setImageLoading(true)}
                                            onLoadEnd={() => setImageLoading(false)}
                                            resizeMode="cover"
                                        />
                                    </View>
                                ))}
                            </ScrollView>
                            <View style={styles.pagination}>
                                {product.images.map((_, index) => (
                                    <View
                                        key={index}
                                        style={[
                                            styles.dot,
                                            activeSlide === index && styles.activeDot
                                        ]}
                                    />
                                ))}
                            </View>
                        </View>

                        <View style={styles.productInfo}>
                            <View style={styles.titlePrice}>
                                <Text style={styles.title}>{product.name}</Text>
                                <Text style={styles.price}>₹{product.price}</Text>
                            </View>
                            <Text style={styles.status}>{product.sku}</Text>
                            <Text style={styles.description}>{product.description}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop:5,marginBottom:5 }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', width: 120, borderWidth: 1, borderRadius: 10, borderColor: "#F01F0E", backgroundColor: '#F5F5F5' }}>
                                    <Text style={{ justifyContent: "center", alignItems: "center", padding: 10 }}>{product.specifications.Color}</Text>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center', width: 120, borderWidth: 1, borderRadius: 10, borderColor: "#F01F0E", backgroundColor: '#F5F5F5' }}>
                                    <Text style={{ justifyContent: "center", alignItems: "center", padding: 10 }}>{product.specifications.Size}</Text>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center', width: 120, borderWidth: 1, borderRadius: 10, borderColor: "#F01F0E", backgroundColor: '#F5F5F5' }}>
                                    <Text style={{ justifyContent: "center", alignItems: "center", padding: 10 }}>{product.specifications.Weight}</Text>
                                </View>
                            </View>


                            <Text style={styles.status}>
                                Status: {product.status.toUpperCase()}
                            </Text>
                            <Text style={styles.quantity}>
                                Available Quantity: {product.stockQuantity}
                            </Text>
                            <TouchableOpacity>
                                <Text style={styles.addToCart}>Add to Cart</Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Product

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginBottom: 70,
    },
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
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
    },
    imageSlider: {
        height: 500,
        width: 'width',
        position: 'relative',

    },
    slide: {
        width: width,
        height: width,

    },
    image: {
        width: '100%',
        height: 500,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    imageLoader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -15 }, { translateY: -15 }],
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#fff',
    },
    productInfo: {
        padding: 20,
    },
    titlePrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'metropolis-bold',
        marginBottom: 0,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'metropolis-bold',
        color: 'black',
        marginBottom: 0,
    },
    status: {
        fontSize: 16,
        fontFamily: 'metropolis-medium',
        marginBottom: 15,
    },
    quantity: {
        fontSize: 16,
        fontFamily: 'metropolis-medium',
        marginBottom: 15,
    },
    description: {
        fontSize: 14,
        fontFamily: 'metropolis-regular',
        lineHeight: 22,
        color: 'gray',
    },
})