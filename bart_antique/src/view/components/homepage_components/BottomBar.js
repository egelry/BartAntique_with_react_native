import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather"
import { inject, observer } from 'mobx-react'
@inject('store')
@observer
export default class BottomBar extends React.Component {
    render() {
        return (
            <View style={styles.bottomBar}>
                <TouchableOpacity
                    onPress={() => {

                        this.props.store.updateTempProducts()
                        this.props.navigation.navigate('ShopPage')
                    }}
                >
                    <Feather name='shopping-bag' size={25} color="black" />

                </TouchableOpacity>
                <View style={{ marginTop: -5 }}>
                    <TouchableOpacity>
                        <Feather name='home' size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('ProfilePage')
                    }}
                >
                    <Feather name='user' size={25} color="black" />
                </TouchableOpacity>
            </View >
        )
    }
}


const { height, width } = Dimensions.get("window")
const styles = StyleSheet.create({

    //styles for bottombar
    bottomBar: {
        height: height * .1,
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})