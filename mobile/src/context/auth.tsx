import React, { createContext, useEffect, useState } from 'react';
import * as AuthSessions from 'expo-auth-session';
import { CLIENT_ID } from '../../enviroment';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../services/api';

interface AuthResponse {
  token: string;
  user: User;
}
interface AuthorizationResponse {
  params: {
    code?: string
    error?: string;
  },
  type?: string;
}

interface User {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
}

interface AuthContextData {
  user: User | null;
  isSigninIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

const SCOPE = 'read:user';
const USER_STORAGE = '@dowhile:user';
const TOKEN_STORAGE = '@dowhile:token';

export function AuthProvider({ children }: AuthProviderProps) {
  const [isSigninIn, setIsSigninIn] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    try {
      setIsSigninIn(true);
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
      const authSessionResponse = await AuthSessions.startAsync({ authUrl }) as AuthorizationResponse;
      console.log(authSessionResponse.params.error)
      if (authSessionResponse.type === 'success' && authSessionResponse.params.error !== 'access_denied') {
        const authResponse = await api.post('/authenticate', { code: authSessionResponse.params.code });
        const { user, token } = authResponse.data as AuthResponse;

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
        await AsyncStorage.setItem(TOKEN_STORAGE, token);
        setUser(user);
      }

      setIsSigninIn(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSigninIn(false)
    }
  }

  async function signOut() {
    setUser(null);
    await AsyncStorage.removeItem(USER_STORAGE)
    await AsyncStorage.removeItem(TOKEN_STORAGE)
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const userStorage = await AsyncStorage.getItem(USER_STORAGE);
      const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE);
      if (userStorage && tokenStorage) {
        api.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`;
        setUser(JSON.parse(userStorage));
      }
      setIsSigninIn(false)
    }

    loadUserStorageData();
  }, [])

  return (
    <AuthContext.Provider value={{ user, isSigninIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}