import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import PrimaryButton from '@components/PrimaryButton';
import spacing from '@theme/spacing';
import colors from '@theme/colors';
import { Assets } from '@assets/index';

export default function ProfileScreen() {
  const [username, setUsername] = React.useState('Habibi');
  const [email, setEmail] = React.useState('habibi@gmail.com');
  const [phone, setPhone] = React.useState('+92001001001');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.card}>
        <Image source={Assets.doctor2} style={styles.avatar} />
        <Text style={styles.change}>Change Picture</Text>

        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} value={username} onChangeText={setUsername} />

        <Text style={styles.label}>Email I'd</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

        <PrimaryButton title="Update" onPress={() => {}} style={{ marginTop: spacing.lg }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { backgroundColor: colors.primary, height: 140 },
  card: {
    marginTop: -80,
    marginHorizontal: spacing.xl,
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: '#EEE'
  },
  avatar: { width: 96, height: 96, borderRadius: 48, alignSelf: 'center', marginTop: -64, backgroundColor: '#E5E7EB' },
  change: { textAlign: 'center', color: colors.subtitle, marginTop: spacing.xs },
  label: { marginTop: spacing.md, fontWeight: '700' },
  input: {
    marginTop: spacing.xs,
    height: 44,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: spacing.md
  }
});
