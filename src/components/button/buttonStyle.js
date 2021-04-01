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
    color: '#00171F',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },

  btnBlue: {
    backgroundColor: '#00171F',
    height: screenWidth * 0.12,
    width: screenWidth * 0.8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
});

export default styles;
