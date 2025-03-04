import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView,ScrollView } from 'react-native'
import React from 'react'


const categories = [
    {
        id: 1,
        image: require('../../assets/images/photo1.png'),
        title: 'Category 1',
    },
    {
        id: 2,
        image: require('../../assets/images/photo1.png'),
        title: 'Category 2',
    },
    {
        id: 3,
        image: require('../../assets/images/photo1.png'),
        title: 'Category 3',
    },
    {
        id: 4,
        image: require('../../assets/images/photo1.png'),
        title: 'Category 4',
    },
];

const CategoryCard = ({ image, title }) => (
    <TouchableOpacity style={styles.categoryCard}>
        <Image source={image} style={styles.categoryImage} />
        <Text style={styles.categoryTitle}>{title}</Text>
    </TouchableOpacity>
);
const Shop = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <View style={styles.header}><Text style={styles.headerText}>Categories</Text></View>
                    <View style={styles.container}>

                        {categories.map((category) => (
                            <CategoryCard key={category.id} image={category.image} title={category.title} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Shop

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
    categoryCard: {
        width: 120,
        height: 160,
        marginTop: 20,
        marginBottom: 0,
        marginRight: 5,
        alignItems: 'center',
        padding: 0,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    categoryImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    categoryTitle: {
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10,
    },

})