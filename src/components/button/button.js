import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './buttonStyle';

//Props: title e onPres.

const Btn = ({title, onPress, type, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={type === 'blue' ? styles.btnBlue : styles.loginBtnWrapper}>
      <Text style={type === 'blue' ? styles.whiteText : styles.loginText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;
