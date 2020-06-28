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
import RealmDb from '../Utility/RealmDb';
class UserListing extends Component {
  constructor() {
    super();
    this.state = {
      userList: null,
    };
  }
  readData = () => {
    const data = RealmDb.ReadDb();
    this.setState({userList: data});
  };
  componentDidMount() {
    this.readData();
  }
  addNewButton = () => {
    return (
      <TouchableOpacity
        style={styles.addNewButton}
        onPress={() =>
          this.props.navigation.push('UserDetail', {readData: this.readData})
        }>
        <Text style={styles.buttonText}>+ ADD NEW USER</Text>
      </TouchableOpacity>
    );
  };
  userListDetails = ({item}) => {
    const name = `${item.firstName} ${item.lastName}`;
    const imageText = item.firstName.charAt(0).toUpperCase();
    return (
      <View style={styles.userCard}>
        <View style={styles.imageView}>
          <Text style={styles.imageText}>{imageText}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.description} numberOfLines={3}>
            {item.description}
          </Text>
        </View>
        <View style={styles.uniqueIdView}>
          <Text style={styles.uniqueId}>{item.uniqueId}</Text>
        </View>
      </View>
    );
  };
  userListingView = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listMainView}
        data={this.state.userList}
        renderItem={this.userListDetails}
        keyExtractor={item => item.uniqueId}
      />
    );
  };
  emptyView = () => {
    return (
      <View style={styles.noDataView}>
        <Text style={styles.noDataText}>No User Found!!</Text>
        <Text style={styles.noDataText}>
          Click on add new user to create first user.
        </Text>
      </View>
    );
  };
  render() {
    const {userList} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {this.addNewButton()}
        {userList && userList.length
          ? this.userListingView()
          : this.emptyView()}
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
  noDataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 16,
    fontWeight: 'bold',
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
