import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  containerBox: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  box: {
    flexDirection: 'column',
    height: 80,
    width: screenWidth,
    backgroundColor: 'white',
    marginTop: 1,
    paddingLeft: screenWidth * 0.05,
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    borderBottomColor: '#F1F1F1',
    borderTopColor: '#F1F1F1',

    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
    width: screenWidth * 0.78,
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#b6b6b6',
    marginLeft: 10,
    paddingBottom: 3,
  },

  avatarUser: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: 100,
    height: 100,
    marginVertical: 15,
    alignSelf: 'center',
  },
});

export default styles;
