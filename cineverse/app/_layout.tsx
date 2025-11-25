import React, { useEffect } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { MovieStatusProvider, useMovieStatus } from '../lib/MovieStatusContext';
import { StatusBar, View, ActivityIndicator } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const AppRoot = () => {
  const { session, loading } = useMovieStatus();
  const segments = useSegments();
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Bold': Inter_700Bold,
  });

  useEffect(() => {
    if (!fontsLoaded || loading) {
      return;
    }
    
    SplashScreen.hideAsync();

    const inApp = segments[0] === '(tabs)';

    if (session && !inApp) {
      if (segments.length === 0 || segments[0] === 'auth') {
         router.replace('/(tabs)');
      }
    } else if (!session && inApp) {
      router.replace('/auth');
    }

  }, [session, loading, fontsLoaded, segments, router]);

  if (!fontsLoaded || loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1C1C1E' }}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="auth" />
      <Stack.Screen name="(tabs)" />
      
      {}
      <Stack.Screen 
        name="movie/[id]" 
        options={{ 
          headerShown: true, 
          title: 'Detalhes',
          headerStyle: { backgroundColor: '#1C1C1E' },
          headerTintColor: '#FFFFFF'
        }} 
      />
      <Stack.Screen 
        name="user/[id]" 
        options={{ 
          headerShown: true,
          title: 'Perfil',
          headerStyle: { backgroundColor: '#1C1C1E' },
          headerTintColor: '#FFFFFF'
        }} 
      />
    </Stack>
  );
};

export default function AppLayout() {
  return (
    <MovieStatusProvider>
      <StatusBar barStyle="light-content" />
      <AppRoot />
    </MovieStatusProvider>
  );
}
