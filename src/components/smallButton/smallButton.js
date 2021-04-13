import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './smallButtonStyle';

//Props: title e onPres.

const SmallBtn = ({title, onPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.smallBtnWrapper}>
      <Text style={styles.smallBtnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SmallBtn;
