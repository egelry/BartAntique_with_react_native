import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from './components/profilepage_components/AppBar'
import UserContent from './components/profilepage_components/UserContent'
import LastSeen from './components/profilepage_components/LastSeen'
import CreateNewProduct from './components/profilepage_components/CreateNewProduct'

export default class ProfilePage extends React.Component {
    render() {
        return (
            <View>
                <AppBar navigation={this.props.navigation} />
                <UserContent />
                <LastSeen />
                <CreateNewProduct />
            </View>
        )
    }
}


const styles = StyleSheet.create({})