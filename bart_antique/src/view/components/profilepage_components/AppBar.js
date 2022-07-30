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
        <View style={styles.profileTextBox}>
          <Text style={styles.profileText}>
            PROFILE
          </Text>
        </View>



      </View >
    )
  }
}

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

  //style for appbar -> profile page
  appBar: {
    height: height * 0.1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  arrowLeftBox: {
    justifyContent: "center",
    marginLeft: 15
  },
  profileTextBox: {
    height: height * .1,
    justifyContent: "center",
    marginRight: 15
  },
  profileText: {
    fontSize: 12.5,
    letterSpacing: 1.3,
    fontFamily: "Montserrat-Medium"
  }

})