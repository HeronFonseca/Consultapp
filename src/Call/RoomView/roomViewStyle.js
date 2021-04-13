import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  heading: {
    marginVertical: 10,
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'Roboto-Medium',
  },
  input: {
    margin: 20,
    height: 40,
    backgroundColor: '#CABECB',
  },
  buttonContainer: {
    alignItems: 'center',
    margin: 5,
  },
});

export default styles;
