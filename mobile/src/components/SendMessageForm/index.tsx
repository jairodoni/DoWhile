import React, { useState } from 'react';
import { Alert, Keyboard, TextInput, View } from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../styles/theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormated = message.trim();

    if (messageFormated.length > 0) {
      setSendingMessage(true);
      await api.post('/messages', { message: messageFormated });

      setMessage('');
      // Keyboard.dismiss() para fechar o teclado
      Keyboard.dismiss();
      setSendingMessage(false);

      Alert.alert('Mensagem enviada com sucesso!')
    } else {
      Alert.alert('Escreva a mensagem para envias.')
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        style={styles.input}
        editable={!sendingMessage}
      />

      <Button
        title="ENVIAR MENSAGEM"
        color={COLORS.WHITE}
        backgroundColor={COLORS.PINK}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />
    </View>
  );
}