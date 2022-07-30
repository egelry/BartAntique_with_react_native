import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    Button
} from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

export default class CreateNewProduct extends React.Component {
    render() {
        return (
            <View style={styles.createNewProduct}>
                <View style={styles.createNewProductTextBox}>
                    <Text style={styles.createNewProductText}>NEW PRODUCT</Text>

                </View>
                <View style={styles.termBox}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="black"
                        text="By submitting this form, I accept the Privacy Policy and the Terms of Use "
                        textStyle={{ fontFamily: "Montserrat-Medium", fontSize: 9 }}
                        onPress={_ => { }}
                    />
                </View>
                <View style={styles.createNewProductButtonBox}>
                    <Button
                        onPress={_=>{}}
                        title="ADD"
                        color="#8C756A"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>

            </View>
        )
    }
}

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    // style for create new product -> profile page
    createNewProduct: {
        height: height * .2,
    },
    createNewProductTextBox: {
        marginLeft: 10,

    },
    createNewProductText: {
        marginLeft: 10,
        fontSize: 22,
        fontFamily: "Montserrat-Bold",
        letterSpacing: 1.4,
        color: "black",
    },
    termBox: {
        marginTop: 10,
        marginLeft: 10
    },
    createNewProductButtonBox: {
        marginTop : 5,
        height: 40,
        width : 100,
        alignSelf : "flex-end",
    }


})