import { StyleSheet, Dimensions, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Person from '../model/Person'
import axios from 'axios'
import PersonController from '../controller/PersonController'
import { AppBar } from './components/homepage_components/AppBar'
import MostExpensive from './components/homepage_components/MostExpensive'
import Popular from './components/homepage_components/Popular'
import BottomBar from './components/homepage_components/BottomBar'
import Feather from 'react-native-vector-icons/Feather'

import getAllProducts from './utils/all_products'
import calculateMostExpensive from './utils/calculate_most_expensive'

import { inject, observer } from "mobx-react"

@inject("store")
@observer
export default class HomePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            mostExpensive: [],
            isLoading: false,
        }

    }



    componentDidMount() {

        // (1)get all products -> (2)calculate most expensive product ->
        // (3)mobx store data = state data -> (4)mobx store temp data = state data 
        // (5)isLoading = true for return page
        getAllProducts()
            .then((d) => this.setState({ data: d }))
            .then(_ => this.setState((state) => ({ mostExpensive: calculateMostExpensive(state.data) })))
            .then(_ => this.props.store.getProducts(this.state.data))
            .then(_ => this.props.store.getTempProducts(this.state.data))
            .then(_ => this.setState({ isLoading: true }))

    }



    render() {

        const { data, mostExpensive, isLoading } = this.state
        const { navigation } = this.props
        //if data is loaded
        if (isLoading)
            return (
                <View>
                    <AppBar />
                    <MostExpensive mostExpensive={mostExpensive} />
                    <Popular data={data} navigation={navigation} />
                    <BottomBar navigation={navigation} />
                </View >
            )
        //if data is not loaded
        return (
            <View style={styles.loading}>
                <Feather name="loader" size={30} color="black" />
            </View>
        )

    }
}

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    // style for loader until data has come
    loading: {
        height,
        justifyContent: "center",
        alignItems: "center"
    }
})




