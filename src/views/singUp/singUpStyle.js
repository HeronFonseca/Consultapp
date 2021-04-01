import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  singUpWrapper: {
    flexDirection: 'column',
    backgroundColor: '#53C8B0',
    height: screenHeight * 0.75,
    width: screenWidth * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowRadius: 3.84,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 5,
  },
  emailText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 28,
    color: '#00171F',
  },
  passwordText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 28,
    color: '#00171F',
  },
  passwordConfirmText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 28,
    color: '#00171F',
  },
  form: {
    justifyContent: 'space-around',
    height: screenHeight * 0.75,
  },
  inputsWrapper: {
    height: screenHeight * 0.5,
    justifyContent: 'space-between',
  },
});

export default styles;
