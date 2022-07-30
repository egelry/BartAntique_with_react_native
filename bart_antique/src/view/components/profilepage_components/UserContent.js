import {
    StyleSheet,
    Image,
    Text,
    Dimensions,
    View
} from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather"
const UserContent = () => {
    return (
        <View style={styles.userContent}>
            <View style={styles.userProfileImage}>
                <Feather name='user' size={120} color="black" />

            </View>
            <View style={styles.userProfileDetail}>
                <Text style={styles.nameSurnameText}>MICHEAL</Text>
                <Text style={styles.nameSurnameText}>JORDAN</Text>
                <Text style={styles.spentText}>SPENT: 5123$</Text>
            </View>
        </View>
    )
}

export default UserContent

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    //style for user content
    userContent: {
        height: height * 0.3,
        justifyContent: "space-around",
    },
    userProfileImage: {
        alignItems: "center",
    },
    userProfileDetail: {
        alignItems: "center",
    },
    nameSurnameText: {
        fontSize: 22,
        fontFamily: "Montserrat-Medium",
        color: "black"
    },
    spentText: {
        fontSize: 12,
        marginTop: 3,
        fontFamily: "Montserrat-Medium",

    },
   

})