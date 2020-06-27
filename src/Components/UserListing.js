/**
 * Teqop User Listing File
 * @author Meghna Malhotra
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
class UserListing extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>UserListing</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.push('UserDetail')}>
          <Text>BUTTON</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
export default UserListing;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
