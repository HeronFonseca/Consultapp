import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  titleText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
    color: '#00171F',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
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
  itemText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: '#00171F',
  },
  itemName: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: '#00171F',
  },
});

export default styles;
