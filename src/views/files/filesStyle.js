import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    textAlign: 'center',
    padding: 20,
    color: '#00171F',
  },
  subtitleText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    textAlign: 'center',
    color: '#00171F',
  },
  buttonStyle: {
    backgroundColor: '#00171F',
    height: screenWidth * 0.12,
    width: screenWidth * 0.8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
  nextPageBtn: {
    backgroundColor: '#00171F',
    height: screenWidth * 0.12,
    width: screenWidth * 0.8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
});

export default styles;
