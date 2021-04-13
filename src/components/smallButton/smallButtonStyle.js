import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  smallBtnWrapper: {
    backgroundColor: '#00171F',
    height: screenWidth * 0.12,
    width: screenWidth * 0.4,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
});

export default styles;
