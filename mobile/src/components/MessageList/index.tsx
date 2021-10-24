import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Message } from '../Message';
import { api } from '../../services/api';
import { io } from 'socket.io-client'

import { MESSAGES_EXAMPLE } from '../../utils/messages'

import { styles } from './styles';

interface MessageItem {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string
  }
}

let messagesQueue: MessageItem[] = [];
// let messagesQueue: MessageItem[] = MESSAGES_EXAMPLE;

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageItem[]>([])

  async function fetchMessages() {
    const messagesResponse = await api.get<MessageItem[]>('/messages/last3');
    setCurrentMessages(messagesResponse.data);
  }
  useEffect(() => {
    fetchMessages();
  }, [])
  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages(prevState => [
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ]);
        messagesQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [])

  return (
    <ScrollView
      style={styles.container}
      //contentContainerStyle premite personalizar o Scrollview
      contentContainerStyle={styles.content}
      // "keyboardShouldPersistTaps" faz com que o teclado seja fechado ao clicar na lista
      keyboardShouldPersistTaps="never"
    >
      {
        currentMessages.map(message => <Message key={message.id} data={message} />)
      }
    </ScrollView>
  );
}