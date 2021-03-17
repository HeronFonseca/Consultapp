import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './buttonStyle';

//Props: title e onPres.

const Btn = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.loginBtnWrapper}>
      <Text style={styles.loginText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
