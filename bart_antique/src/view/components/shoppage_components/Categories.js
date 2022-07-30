import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import VerticalText from 'react-native-vertical-text';
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome5"

import { inject, observer } from 'mobx-react';

@inject("store")
@observer
export default class Categories extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            category: ""
        }
    }




    render() {
        const { category } = this.state
        return (
            <View style={styles.categories}>
                <View style={styles.categoriesTextBox}>
                    <VerticalText style={{
                        alignSelf: "flex-start",
                        fontSize: 13,
                        color: "black",
                        fontFamily: "Montserrat-Bold",
                        color: "#8C756A"
                    }} text={"CATEG"} />
                    <View style={{ marginLeft: -12 }}>
                        <VerticalText style={{
                            alignSelf: "flex-start",
                            fontSize: 13,
                            color: "black",
                            fontFamily: "Montserrat-Bold",
                            color: "#8C756A"


                        }} text={"ORIES"} />
                    </View>
                </View>
                <View style={styles.verticalDivider} />
                <View style={styles.categoriesBoxes}>
                    <TouchableOpacity
                        onPress={_ => {
                            this.props.store.updateTempProducts()
                            this.setState({ category: "clock" })
                            this.props.store.filterProducts("clock")
                        }}
                    >
                        <View style={category === "clock" ?
                            styles.enabledCategoriesBox : styles.categoriesBox}>
                            <Feather name='watch' size={25} color={category === "clock" ? "grey" : "black"} />
                            <Text style={styles.categoriesItemText}>CLOCK</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={_ => {
                            this.props.store.updateTempProducts()
                            this.setState({ category: "kitchen" })
                            this.props.store.filterProducts("kitchen")
                        }}>
                        <View style={category === "kitchen" ?
                            styles.enabledCategoriesBox : styles.categoriesBox}>
                            <Ionicons name='restaurant-outline' size={25} color={category === "kitchen" ? "grey" : "black"} />
                            <Text style={styles.categoriesItemText}>KITCHEN</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={_ => {
                            this.props.store.updateTempProducts()
                            this.setState({ category: "jewelry" })
                            this.props.store.filterProducts("jewelry")

                        }}>
                        <View style={category === "jewelry" ?
                            styles.enabledCategoriesBox : styles.categoriesBox}>
                            <FontAwesome name='gem' size={25} color={category === "jewelry" ? "grey" : "black"} />
                            <Text style={styles.categoriesItemText}>JEWELRY</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={_ => {
                            this.props.store.updateTempProducts()
                            this.setState({ category: "glass" })
                            this.props.store.filterProducts("glass")
                        }}
                    >
                        <View style={category === "glass" ?
                            styles.enabledCategoriesBox : styles.categoriesBox}>
                            <FontAwesome name='wine-glass' size={25} color={category === "glass" ? "grey" : "black"} />
                            <Text style={styles.categoriesItemText}>GLASS</Text>
                        </View>
                    </TouchableOpacity>


                </View>

            </View>
        )
    }
}

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    //style for categories
    categories: {
        height: height * 0.13,
        width: width * 1,
        flexDirection: "row"
    },


    //style for categories text
    categoriesTextBox: {
        flexDirection: "row",
    },

    //vertical divider
    verticalDivider: {
        height: height * 0.13,
        width: 2,
        backgroundColor: "black"
    },

    //categories boxes
    categoriesBoxes: {
        height: height * 0.13,
        marginLeft: 10,
        width: width * 0.82,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    categoriesBox: {
        height: height * 0.116,
        width: height * 0.116,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    categoriesItemText: {
        fontFamily: "Montserrat-Light",
        marginTop: 6,
    },

    enabledCategoriesBox: {
        height: height * 0.111,
        width: height * 0.111,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "grey",
        alignItems: "center",
        justifyContent: "center"
    },


})