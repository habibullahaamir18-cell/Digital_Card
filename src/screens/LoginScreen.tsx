import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Assets } from '@assets/index';
import PrimaryButton from '@components/PrimaryButton';
import colors from '@theme/colors';
import spacing from '@theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/RootNavigator';

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: LoginProps) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secure, setSecure] = React.useState(true);

  return (
    <View style={styles.container}>
      <Image source={Assets.logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.welcome}>Welcome Back!</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholderTextColor={colors.subtitle}
      />

      <Text style={[styles.label, { marginTop: spacing.md }]}>Password</Text>
      <View style={styles.passwordRow}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={[styles.input, { flex: 1, marginTop: 0, borderWidth: 0 }]}
          placeholderTextColor={colors.subtitle}
          secureTextEntry={secure}
        />
        <TouchableOpacity onPress={() => setSecure((s) => !s)} style={styles.eye}>
          <Ionicons name={secure ? 'eye-off' : 'eye'} size={22} color={colors.subtitle} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgotten password?</Text>
      </TouchableOpacity>

      <PrimaryButton title="Login" onPress={() => navigation.replace('MainTabs')} style={{ marginTop: spacing.xl, width: '80%' }} />

      <Text style={styles.signupRow}>
        Or Create a New Account! <Text style={styles.signup}>Signup</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.xl, backgroundColor: '#fff' },
  logo: { width: 140, height: 80, alignSelf: 'center', marginVertical: spacing.lg },
  welcome: { fontSize: 24, fontWeight: '800', textAlign: 'center', marginBottom: spacing.xl },
  label: { color: '#111', fontWeight: '600', marginLeft: 6 },
  input: {
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: spacing.sm,
    marginTop: spacing.xs,
    fontSize: 16
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E5E7EB'
  },
  eye: { padding: spacing.xs },
  forgot: { color: colors.subtitle, textAlign: 'right', marginTop: spacing.sm },
  signupRow: { textAlign: 'center', marginTop: spacing.md, color: colors.subtitle },
  signup: { color: colors.primary, fontWeight: '700' }
});
