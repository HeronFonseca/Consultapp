import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#53C8B0',
  },
  loginContainerInner: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  loginImage: {
    marginTop: 40,
    resizeMode: 'contain',
    alignItems: 'center',
    width: screenHeight * 0.22,
    height: screenHeight * 0.22,
  },
  logLabel: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: '#FFF',
    textAlign: 'center',
    padding: 24,
  },
  forgotPasswordWrapper: {
    alignItems: 'flex-end',
    marginBottom: screenWidth * 0.04,
  },
  forgotPasswordLabel: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    color: '#FFF',
  },
  createAccountLabel: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#6E6E6E',
  },

  singUpWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  singUpText: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#FFF',
    marginLeft: 5,
  },
  errorMessageLabel: {
    color: '#F8BE0E',
    paddingBottom: 4,
  },
});

export default styles;