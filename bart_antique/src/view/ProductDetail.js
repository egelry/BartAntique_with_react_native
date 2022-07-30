import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from './components/productdetail_components/AppBar'
import Header from './components/productdetail_components/Header'

const ProductDetail = ({ navigation }) => {
    return (
        <View style={styles.productDetail}>
            <AppBar navigation={navigation} />
            <Header />
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({

    //style for product detail
    productDetail: {

    }
})