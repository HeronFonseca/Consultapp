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
    justifyContent: 'space-between',
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
  doctorName: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    color: '#00171F',
  },
  informationWraper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dateWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  specialty: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    color: '#00171F',
  },
  consultationHour: {
    backgroundColor: 'red',
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    color: '#00171F',
  },
  weekDay: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    color: '#00171F',
  },
});

export default styles;
