import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather"
import { inject, observer } from 'mobx-react'

@inject("store")
@observer
export default class AppBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            searchInputText: ""
        }
    }

    render() {

        return (
            <View style={styles.appBar}>
                <TouchableOpacity
                    style={styles.arrowLeftBox}
                    onPress={_ => {
                        this.props.navigation.goBack(null)
                    }}>
                    <Feather name='arrow-left' size={25} color="black" />

                </TouchableOpacity>

                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search"

                        maxLength={17}
                        onChangeText={(text) => {
                            this.props.store.updateTempProducts()
                            this.props.store.searchProduct(text)
                    
                        }}
                    />
                    <TouchableOpacity
                        onPress={_ => {
                            console.log("clicked search")
                        }}>
                        <View style={styles.searchIconBox}>
                            <Feather name='search' size={25} color="black" />

                        </View>
                    </TouchableOpacity>
                </View>

            </View >
        )
    }
}

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    //style for appbar -> shop page
    appBar: {
        height: height * 0.1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    arrowLeftBox: {
        justifyContent: "center",
        marginLeft: 15
    },

    //textinput
    inputBox: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        height: 40,
        marginRight: 10,
        borderWidth: 0.7,
        borderRadius: 5,
        borderColor: "black",
        alignSelf: "center"
    },
    input: {
        height: 50,
        width: width * .6,
        paddingLeft: 10,
        letterSpacing: 1.3,
        fontSize: 17,
    },
    searchIconBox: {
        justifyContent: "center",
        marginLeft: 2,
        marginRight: 10

    }
})