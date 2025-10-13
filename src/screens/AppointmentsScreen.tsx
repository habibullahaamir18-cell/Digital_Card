import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import spacing from '@theme/spacing';

export default function AppointmentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointments</Text>
      <Text>Coming soon - integrate your scheduler here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: spacing.xl },
  title: { fontSize: 22, fontWeight: '800', marginBottom: spacing.md }
});
