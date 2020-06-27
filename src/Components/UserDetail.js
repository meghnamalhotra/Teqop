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
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImagePath from '../Utility/ImagePath';
class UserDetail extends Component {
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
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.header()}
        <Text>UserDetail</Text>
      </SafeAreaView>
    );
  }
}
export default UserDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImgView: {
    position: 'absolute',
    top: 20,
    left: 16,
  },
  headerImg: {
    height: 20,
    width: 20,
  },
});
