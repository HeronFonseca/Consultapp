import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEEAE1',
    borderRadius: 5,
    shadowRadius: 3.84,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 5,
    width: screenWidth * 0.9,
    padding: 10,
    marginVertical: 8,
  },
  specialty: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    color: '#00171F',
  },
});

export default styles;
