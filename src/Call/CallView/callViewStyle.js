import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  heading: {
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'Roboto-Medium',
  },
  rtcview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CABECB',
    margin: 5,
  },
  rtc: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  toggleButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  callButtons: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    margin: 5,
  },
});

export default styles;
