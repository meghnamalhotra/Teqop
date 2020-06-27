/**
 * Teqop User Listing File
 * @author Meghna Malhotra
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
const UserList = [
  {
    unique_key: 'abc45',
    name: 'Meghna Malhotra',
    description:
      'I am react native developerjsabdjaj,BDJEBFB<SHDFKAKJSFKFDBJSkhkdsjfchnsdkjfnkjsndkfgndfjkngkjdbgjbncfjgnjdfngbjdfngbjb',
  },
  {
    unique_key: 'abc411',
    name: 'Kanishk Gupta',
    description: 'I am react native developer',
  },
  {
    unique_key: 'a499',
    name: 'Sanya Tuli',
    description: 'I am react native developer',
  },
  {
    unique_key: 'ui65',
    name: 'Varun Kumar',
    description: 'I am react native developer',
  },
  {
    unique_key: 'zxi44',
    name: 'Sonali kapoor',
    description: 'I am react native developer',
  },
  {
    unique_key: 'zxi44',
    name: 'Sonali kapoor',
    description: 'I am react native developer',
  },
  {
    unique_key: 'zxi44',
    name: 'Sonali kapoor',
    description: 'I am react native developer',
  },
  {
    unique_key: 'zxi44',
    name: 'Sonali kapoor',
    description: 'I am react native developer',
  },
  {
    unique_key: 'zxi44',
    name: 'Sonali kapoor',
    description: 'I am react native developer',
  },
  {
    unique_key: 'zxi44',
    name: 'Sonali kapoor',
    description: 'I am react native developer',
  },
];
class UserListing extends Component {
  addNewButton = () => {
    return (
      <TouchableOpacity
        style={styles.addNewButton}
        onPress={() => this.props.navigation.push('UserDetail')}>
        <Text style={styles.buttonText}>+ ADD NEW USER</Text>
      </TouchableOpacity>
    );
  };
  userListDetails = ({item}) => {
    const imageText = item.name.charAt(0);
    return (
      <View style={styles.userCard}>
        <View style={styles.imageView}>
          <Text style={styles.imageText}>{imageText}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.description} numberOfLines={3}>
            {item.description}
          </Text>
        </View>
        <View style={styles.uniqueIdView}>
          <Text style={styles.uniqueId}>{item.unique_key}</Text>
        </View>
      </View>
    );
  };
  userListingView = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listMainView}
        data={UserList}
        renderItem={this.userListDetails}
        keyExtractor={item => item.unique_key}
      />
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.addNewButton()}
        {this.userListingView()}
      </SafeAreaView>
    );
  }
}
export default UserListing;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
  },
  listMainView: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
    marginHorizontal: 16,
    paddingBottom: 20,
  },
  imageView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#22beab',
    marginRight: 16,
  },
  addNewButton: {
    marginRight: 16,
    marginTop: 20,
    alignSelf: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#008080',
    borderRadius: 5,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
    marginHorizontal: 16,
  },
  uniqueIdView: {
    flex: 0.25,
    alignItems: 'flex-end',
  },
  textView: {
    flex: 0.75,
  },
  imageText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  description: {
    marginTop: 10,
    fontSize: 14,
  },
  uniqueId: {
    fontSize: 12,
    color: '#22beab',
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
