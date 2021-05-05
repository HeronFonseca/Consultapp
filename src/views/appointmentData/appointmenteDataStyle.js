import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appointmentCard: {
    flexDirection: 'column',
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
    height: screenHeight * 0.7,
    padding: 10,
    marginVertical: 8,
  },
  specialty: {
    fontFamily: 'Roboto-Bold',
    fontSize: 35,
    color: '#00171F',
    alignItems: 'center',
  },
  image: {
    width: screenWidth * 0.2,
    height: screenHeight * 0.2,
    borderRadius: 5,
  },
  doctorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  doctorName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: '#00171F',
  },
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  date: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: '#00171F',
  },
  btnWrapper: {
    height: screenHeight * 0.2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  specialtyWrapper: {
    alignItems: 'center',
  },
  idTextWrapper: {
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#00171F',
    marginTop: 15,
    //backgroundColor: 'red',
    height: screenHeight * 0.15,
  },
  idTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: '#00171F',
  },
  idSubtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: '#00171F',
    marginTop: -15,
  },
  idText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    textAlign: 'center',
    color: '#00171F',
    width: screenWidth * 0.3,
    backgroundColor: '#D3F1EB',
  },
});

export default styles;
