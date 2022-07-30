import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'

import VerticalText from 'react-native-vertical-text';
import { accounting } from 'accounting';

export default class MostExpensive extends React.Component {
    render() {

        const { mostExpensive } = this.props
        return (
            <View style={styles.mostExpensive}>
                <View style={styles.mostExpensiveBox}>
                    <View style={styles.verticalTextBox}>
                        <VerticalText style={{
                            alignSelf: "flex-start",
                            color: "black",
                            fontFamily: "Montserrat-Bold",

                        }} text={"MOST"} />
                        <VerticalText style={{
                            alignSelf: "flex-start",
                            fontSize: 14.5,
                            color: "black",
                            fontFamily: "Montserrat-Bold",


                        }} text={"EXPENSIVE"} />
                    </View>
                    <View style={styles.verticalDivider} />
                    <View style={styles.imageAndPropsBox}>
                        <View style={styles.propsBox}>
                            <View style={styles.propsTextBox}>
                                <Text style={styles.propsText}>
                                    antique name
                                </Text>
                                <Text style={styles.propsDetailText}>
                                    {mostExpensive['title']}
                                </Text>
                            </View>
                            <View style={styles.propsTextBox}>
                                <Text style={styles.propsText}>
                                    price
                                </Text>
                                <Text style={styles.propsDetailText}>
                                    {accounting.formatMoney(mostExpensive['value'])}$
                                </Text>
                            </View>
                            <View style={styles.propsTextBox}>
                                <Text style={styles.propsText}>
                                    date
                                </Text>
                                <Text style={styles.propsDetailText}>
                                    12 jun 1885
                                </Text>
                            </View>

                        </View>
                        <Image
                            style={styles.image}
                            resizeMode="contain"
                            source={{
                                uri: mostExpensive['image'],
                            }}
                        />
                    </View>

                </View>

            </View>
        )
    }
}

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    //Most Expensive Text and Vertical Divider
    mostExpensive: {
        marginTop: height * 0.03,
        height: height * 0.27,
        flexDirection: "row",
        width: width * 1,
    },
    mostExpensiveBox: {
        flexDirection: "row",
        marginLeft: 5
    },
    verticalTextBox: {
        flexDirection: "row",
    },
    verticalDivider: {
        width: 3,
        height: height * 0.25,
        backgroundColor: "#8C756A",
        marginLeft: 10,
    },


    //Image And Props
    imageAndPropsBox: {
        height: height * 0.27,
        width: 320,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    image: {
        height: 170,
        width: 160,
    },
    propsTextBox: {
        alignItems: "center",
        margin: 3
    },
    propsText: {
        letterSpacing: 1.2,
        color: "black",
        textDecorationLine: "underline",
        fontFamily: "Montserrat-Light",
    },
    propsDetailText: {
        fontSize: 18,
        fontFamily: "Vidaloka-Regular",
        letterSpacing: 1.2,
        color: "black"
    },
})