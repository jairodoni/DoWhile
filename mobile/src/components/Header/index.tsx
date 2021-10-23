import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

import { UserPhoto } from '../UserPhoto'
import LogoSvg from '../../assets/logo.svg'
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />
      <UserPhoto imageUri='https://randomuser.me/api/portraits/women/95.jpg' />
      <TouchableOpacity>
        <Text style={styles.logoutText}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}