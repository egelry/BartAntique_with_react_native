import {
    StyleSheet,
    Dimensions,
    Text,
    FlatList,
    Image,
    View
} from 'react-native'
import React from 'react'
import { inject, observer } from "mobx-react"

@inject("store")
@observer
export default class AllProducts extends React.Component {

    constructor(props) {
        super(props)


    }



    renderItem = ({ item }) => {
        // categorys first letter to upper case 
        const category = item.category.charAt(0).toUpperCase() + item.category.slice(1)

        return (
            <View style={styles.productItem}>
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={{
                        uri: item.image,
                    }}
                />
                <View style={styles.productInfoBox}>
                    <Text style={styles.priceText}>NAME : {item.title}</Text>
                    <Text style={styles.priceText}>PRICE : {item.value}$</Text>
                    <Text style={styles.priceText}>CATEGORY : {category}</Text>
                    <Text style={styles.priceText}>DATE : 20 MAR 1889</Text>
                </View>
            </View>
        );

    }



    render() {
        const allProducts = this.props.store.tempProducts
        return (
            <View style={styles.allProducts}>
                <View style={styles.allProductsTextBox}>
                    <Text style={styles.allProductsText}>ALL PRODUCTS</Text>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={allProducts}
                    renderItem={this.renderItem}
                    keyExtractor={item => item._id}

                />
            </View>
        )
    }
}

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    //style for all products
    allProducts: {
        height: height * .77,
        width: width * 1,

    },

    // all products text
    allProductsTextBox: {
        height: height * 0.05,
        width,
        alignItems: "center",
        justifyContent: "center"
    },
    allProductsText: {
        fontFamily: "Montserrat-Bold",
        fontSize: 20,
        letterSpacing: 1.4,
        textDecorationLine: "underline",
        color: "black"
    },


    // all products flat list
    productItem: {
        height: (height * 0.32) - 16,
        width: width * 0.42,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: "center",
        flexDirection: "row"
    },
    productInfoBox: {
    },
    image: {
        height: 150,
        width: width * 0.42,
    },
    priceText: {
        fontFamily: "Montserrat-Bold",
        fontSize: 12,
        margin: 4,
        color: "black"
    }


})