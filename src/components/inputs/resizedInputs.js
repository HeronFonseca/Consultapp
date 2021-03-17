import React, {useEffect, useRef} from 'react';
import {TextInput} from 'react-native';
import styles from './inputsStyle';
import {useField} from '@unform/core';

// Props: placeholder e secureTextEntry

function ResizedInput({
  name,
  placeholder,
  secureTextEntry,
  size,
  onChangeText,
  keyboardType,
  onFocus,
  onBlur,
  ...rest
}) {
  const inputRef = useRef(null);
  const {fieldName, registerField, defaultValue, error} = useField(name);
  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({text: value});
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);
  return (
    <TextInput
      ref={inputRef}
      style={size === 'large' ? styles.largeInput : styles.smallInput}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      onFocus={onFocus}
      onBlur={onBlur}
      defaultValue={defaultValue}
      onChangeText={value => {
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      }}
      {...rest}
    />
  );
}
export default ResizedInput;
