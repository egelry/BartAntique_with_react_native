import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native'
import React from 'react'
import getAllProducts from "../../utils/all_products";

export default class Popular extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }




    componentDidMount() {
        this.setState({ data: this.props.data })
    }

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
        <TouchableOpacity
            onPress={_ => {
                this.props.navigation.navigate('ProductDetail')
            }}
        >
            <View style={styles.popularItem}>
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={{
                        uri: item.image,
                    }}
                />
                <Text style={styles.priceText}>NAME : {item.title}</Text>
                <Text style={styles.priceText}>PRICE : {item.value}$</Text>


            </View>
        </TouchableOpacity>
    );

    render() {
        console.log("render : " + JSON.stringify(this.state.data[0]))

        return (
            <View style={styles.popular}>
                <View style={styles.popularTextBox}>
                    <Text style={styles.popularText}>WHAT IS LAST SOLD?</Text>

                </View>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item._id}
                    horizontal
                />
            </View >
        )
    }
}

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    //style for last sold
    popular: {
        marginTop: height * 0.03,
        height: height * 0.37,
        width: width * 1,
    },

    popularTextBox: {
        height: height * 0.05,
        width: width,
        alignItems: "center",
        justifyContent: "center",
    },
    popularText: {
        fontFamily: "Montserrat-Bold",
        fontSize: 19,
        letterSpacing: 1.6,
        color: "black",
        textDecorationLine: "underline"

    },
    popularItem: {
        height: (height * 0.32) - 16,
        width: width * 0.42,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: "center"
    },
    image: {
        height: 150,
        width: width * 0.42,
    },
    priceText: {
        fontFamily: "Montserrat-Bold",
        fontSize: 12,
        margin: 4,
        color: "black"
    }



})