import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image
} from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={{
                        uri: "https://www.pngall.com/wp-content/uploads/2017/03/Antique-PNG-File.png",
                    }}
                />
                <Text style={styles.textStyle}>LOREMIP</Text>
                <Text style={styles.textStyle}>22 jun 1913</Text>
                <Text style={styles.textStyle}>1254$</Text>
                <BouncyCheckbox
                    size={25}
                    fillColor="black"
                    text="Sold"
                    textStyle={{ fontFamily: "Montserrat-Medium", fontSize: 9 }}
                    onPress={_ => { }}
                />
            </View >
        )
    }
}

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    //style for header -> product detail
    header: {
        height: height * 0.9,
        width: width * 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        height: 200,
        width: width * 0.7,
    },
    textStyle : {
        margin : 10,
    }
})