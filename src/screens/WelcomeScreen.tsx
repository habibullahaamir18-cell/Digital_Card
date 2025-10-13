import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Assets } from '@assets/index';
import PrimaryButton from '@components/PrimaryButton';
import colors from '@theme/colors';
import spacing from '@theme/spacing';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/RootNavigator';

export type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: WelcomeProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={Assets.logo} style={styles.logo} resizeMode="contain" />
      <Image source={Assets.doctorHero} style={styles.hero} resizeMode="contain" />
      <Text style={styles.title}>BEST DOCTOR</Text>
      <Text style={styles.subtitle}>Appointment app</Text>
      <Text style={styles.caption}>
        Manage and schedule all of your medical appointments easily with healthcare to get a new experience
      </Text>
      <PrimaryButton title="Get Started" onPress={() => navigation.navigate('Login')} style={styles.cta} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.xl,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexGrow: 1
  },
  logo: { width: 140, height: 80, marginTop: spacing.lg },
  hero: { width: '90%', height: 260, marginVertical: spacing.lg },
  title: { fontSize: 22, fontWeight: '800', color: colors.primary, letterSpacing: 0.5, marginTop: spacing.sm },
  subtitle: { fontSize: 18, fontWeight: '600', color: '#1F2937', marginTop: spacing.xxs },
  caption: {
    color: colors.subtitle,
    textAlign: 'center',
    marginTop: spacing.md,
    lineHeight: 20
  },
  cta: { width: '80%', marginTop: spacing.xl }
});
