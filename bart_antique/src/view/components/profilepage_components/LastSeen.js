import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    FlatList,
    Image,
} from 'react-native'
import React from 'react'

export default class LastSeen extends React.Component {

    DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            image: "https://www.pngall.com/wp-content/uploads/2017/03/Antique-PNG-File.png",
            title: 'LOREMIP',
            price: "1234",
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
            image: "https://www.pngall.com/wp-content/uploads/2017/03/Antique.png",
            title: 'SUMSINA',
            price: "124",
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
            image: "https://www.pngall.com/wp-content/uploads/2017/03/Antique-PNG-File.png",
            title: 'LOREMIP',
            price: "1234",
        },
    ];

    renderItem = ({ item }) => (
        <View style={styles.popularItem}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={{
                    uri: item.image,
                }}
            />
            <View style={styles.priceTextBox}>
                <Text style={styles.priceText}>NAME : {item.title}</Text>
                <Text style={styles.priceText}>PRICE : {item.price}$</Text>
            </View>


        </View>
    );

    render() {
        return (
            <View style={styles.lastSeen}>

                <View style={styles.lastSeenTextBox}>
                    <Text style={styles.lastSeenText}>LAST SEEN</Text>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={this.DATA}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    horizontal

                />
            </View>
        )
    }
}

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    // style for last seen
    lastSeen: {
        height: height * .4,
    },

    //last seen text
    lastSeenTextBox: {
        height: height * .07,
        justifyContent: "center",
    },
    lastSeenText: {
        marginLeft: 10,
        fontSize: 22,
        fontFamily: "Montserrat-Bold",
        letterSpacing: 1.4,
        color: "black",
    },



    popularItem: {
        marginLeft: 10
    },

    image: {
        height: 150,
        width: width * 0.42,
    },
    priceTextBox : {
        alignItems : "center"
    },
    priceText: {
        fontFamily: "Montserrat-Bold",
        fontSize: 12,
        margin: 4,
        color: "black"
    }


})