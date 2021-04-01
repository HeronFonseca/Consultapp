import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  inputBlue: {
    borderWidth: 1,
    width: screenWidth * 0.8,
    height: 50,
    borderRadius: 4,
    borderColor: '#00171F',
    backgroundColor: '#53C8B0',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputWhite: {
    color: '#00171F',
    borderWidth: 1,
    width: screenWidth * 0.8,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#FFF',
    backgroundColor: '#53C8B0',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  icon: {
    backgroundColor: 'white',
    width: screenWidth * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeInput: {
    borderWidth: 1,
    width: screenWidth * 0.45,
    height: 50,
    borderRadius: 4,
    borderColor: '#020202',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  smallInput: {
    borderWidth: 1,
    width: screenWidth * 0.3,
    height: 50,
    borderRadius: 4,
    borderColor: '#020202',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default styles;
