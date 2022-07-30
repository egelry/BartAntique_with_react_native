import { StyleSheet, Text, SafeAreaView, } from 'react-native'
import React from 'react'
import AppBar from './components/shoppage_components/AppBar'
import Categories from './components/shoppage_components/Categories'
import AllProducts from './components/shoppage_components/AllProducts'

export default class ShopPage extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <AppBar navigation={this.props.navigation}/>
        <Categories />
        <AllProducts />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({})