import React from 'react';
import { ScrollView } from 'react-native';
import { Message } from '../Message';

import { styles } from './styles';

//contentContainerStyle premite personalizar o Scrollview

export function MessageList() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message />
      <Message />
      <Message />
      <Message />
    </ScrollView>
  );
}