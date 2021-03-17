import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  loginBtnWrapper: {
    backgroundColor: '#FFF',
    height: screenWidth * 0.12,
    width: screenWidth * 0.8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#53C8B0',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
});

export default styles;
