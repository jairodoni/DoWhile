import React from 'react';
import { View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { COLORS } from '../../styles/theme';
import { Button } from '../Button'

import { styles } from './styles';

export function SignInBox() {
  const { signIn, isSigninIn } = useAuth()
  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigninIn}
      />
    </View>
  );
}