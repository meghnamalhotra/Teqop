/**
 * Teqop User Detail File
 * @author Meghna Malhotra
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImagePath from '../Utility/ImagePath';
import {Regex} from '../Utility/Constants';
import RealmDb from '../Utility/RealmDb';
const array = ['uniqueId', 'firstName', 'lastName', 'description'];
class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idCount: 0,
      uniqueId: '',
      firstName: '',
      lastName: '',
      description: '',
      valid: {
        uniqueId: true,
        firstName: true,
        lastName: true,
        description: true,
      },
      empty: {
        uniqueId: false,
        firstName: false,
        lastName: false,
        description: false,
      },
    };
  }
  findByIdInDb = count => {
    let idExist = RealmDb.FindDataById(count);
    if (!idExist) {
      this.writeDataOnDb();
      alert('Data Updated Successfully!!');
      this.props.route.params.readData();
      this.props.navigation.goBack();
    } else {
      alert('Unique Id already exists!!');
    }
  };
  writeDataOnDb = () => {
    const {idCount, uniqueId, firstName, lastName, description} = this.state;
    const data = {
      id: idCount,
      uniqueId: uniqueId,
      firstName: firstName,
      lastName: lastName,
      description: description,
    };
    console.warn('data', data);
    RealmDb.WriteDb(data);
  };
  uniqueIdCheck = () => {
    const {uniqueId} = this.state;
    let count = 0;
    let idArray = uniqueId.split('');
    idArray.forEach(item => {
      let digit = Regex.singleDigit.test(item);
      digit && (count = count + parseInt(item));
    });
    console.warn('count', count);
    this.state.idCount = count;
    this.findByIdInDb(count);
  };
  onSubmitPressed = () => {
    const {empty, valid} = this.state;
    array.forEach(item => {
      if (!this.state[item]) {
        empty[item] = true;
      } else {
        if (item === 'uniqueId') {
          let test = Regex.alphanumeric.test(this.state[item]);
          !test && (valid[item] = false);
        } else if (item === 'firstName' || item === 'lastName') {
          let test = Regex.name.test(this.state[item]);
          !test && (valid[item] = false);
        }
      }
    });
    let emptyCheck = Object.values(empty);
    let validCheck = Object.values(valid);
    if (!emptyCheck.includes(true) && !validCheck.includes(false)) {
      this.uniqueIdCheck();
    }
    this.setState({});
  };
  header = () => {
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        style={styles.headerImgView}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          resizeMode={'contain'}
          style={styles.headerImg}
          source={ImagePath.BACK_ARROW}
        />
      </TouchableOpacity>
    );
  };
  getUserDetails = (title, key, placeholder, length) => {
    const {valid, empty} = this.state;
    return (
      <View style={{marginHorizontal: 25}}>
        <View style={styles.textInputView}>
          <Text style={styles.title}>{`${title}*`}</Text>
          <TextInput
            maxLength={length}
            placeholder={placeholder}
            onChangeText={text => {
              this.state[key] = text;
              empty[key] = false;
              valid[key] = true;
              this.setState({});
            }}
          />
        </View>
        {!valid[key] && (
          <Text style={styles.errorText}>{`Please enter valid ${title}`}</Text>
        )}
        {empty[key] && (
          <Text style={styles.errorText}>{`Please enter ${title}`}</Text>
        )}
      </View>
    );
  };
  textView = () => {
    return (
      <View style={styles.textMainView}>
        {this.getUserDetails(
          'UNIQUE ID',
          'uniqueId',
          'Enter unique id (Max 10 char.)',
          10,
        )}
        {this.getUserDetails('FIRST NAME', 'firstName', 'Enter first name', 20)}
        {this.getUserDetails('LAST NAME', 'lastName', 'Enter last name', 20)}
        {this.getUserDetails(
          'DESCRIPTION',
          'description',
          'Enter description',
          100,
        )}
        <TouchableOpacity
          onPress={() => {
            this.onSubmitPressed();
          }}
          style={styles.buttonView}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.header()}
        {this.textView()}
      </SafeAreaView>
    );
  }
}
export default UserDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
  },
  headerImgView: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  buttonView: {
    backgroundColor: '#22beab',
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputView: {
    borderBottomWidth: 2,
    borderBottomColor: '#008080',
    marginVertical: 10,
  },
  errorText: {
    fontSize: 11,
    color: 'red',
  },
  textMainView: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 16,
    paddingTop: 30,
  },
  title: {
    fontSize: 14,
    color: '#008080',
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerImg: {
    height: 20,
    width: 20,
    tintColor: '#fff',
  },
});
