import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

export const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <View style={styles.logo}>
                <Text style={styles.creatorNameText}>BA</Text>
                <View style={{ margin: -10 }}>
                    <Text style={styles.creationNameText}>antique</Text>
                </View>
                <Text style={styles.creatorNameText}>RT</Text>
            </View>
        </View>
    )
}

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({


    // style for AppBar 
    appBar: {
        height: height * .2,
        justifyContent: "flex-end",
    },
    logo: {
        backgroundColor: "#8C756A",
        height: height * .17,
        width: height * .17,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

    },
    creatorNameText: {
        fontSize: 49,
        color: "white",
        fontFamily: "Vidaloka-Regular"


    },
    creationNameText: {
        fontSize: 23,
        letterSpacing: 3,
        color: "white",
        fontFamily: "Vidaloka-Regular"
    }
})