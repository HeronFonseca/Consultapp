import React, {Profiler, useEffect, useState} from 'react';
import {Text, Image, View, TouchableOpacity, StatusBar} from 'react-native';
import styles from './profileStyle';
import Btn from '../../components/button/button';
import {useAuth} from '../../context/authContext';

const Profile = () => {
  const {LogOut, currentUser} = useAuth();

  console.log('CURENTUSER', currentUser);
  return (
    <>
      <View style={styles.containerBox}>
        <Image
          source={require('../../../assets/images/consultapppreto.png')}
          style={styles.avatarUser}
        />

        <TouchableOpacity style={styles.box} onPress={() => {}}>
          <Text style={styles.subtitle}>Nome Completo</Text>
          <Text style={styles.title}>{currentUser.displayName}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.subtitle}>Email</Text>
          <Text style={styles.title}>{currentUser.email}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => {}}>
          <Text style={styles.subtitle}>Telefone</Text>

          <Text style={styles.title}>Telefone do user</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => {}}>
          <Text style={styles.subtitle}>Senha</Text>
          <Text style={styles.title}>********</Text>
        </TouchableOpacity>
        <Btn
          title={'LOGOUT'}
          type={'blue'}
          onPress={() => {
            LogOut();
          }}
        />
      </View>
    </>
  );
};

export default Profile;
