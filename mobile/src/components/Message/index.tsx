import React from 'react';

import { Text, View } from 'react-native';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';


export function Message() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Texto da Mensagem
      </Text>

      <View style={styles.footer}>
        <UserPhoto
          imageUri='https://randomuser.me/api/portraits/women/95.jpg'
          sizes="SMALL"
        />
        <Text style={styles.userName}>
          Nome do Usuario
        </Text>
      </View>
    </View>
  );
}