import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../styles/theme';
import { Button } from '../Button'

import { styles } from './styles';

export function SignInBox() {
  return (
    <View>
      <Button
        title="ENTRAR COM GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
      />
    </View>
  );
}