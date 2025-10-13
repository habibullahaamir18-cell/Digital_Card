import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '@theme/colors';
import spacing from '@theme/spacing';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChangeText, placeholder = 'Search doctor, medicines etc' }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={18} color={colors.subtitle} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.subtitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F4F7',
    paddingHorizontal: spacing.md,
    height: 44,
    borderRadius: 12
  },
  input: {
    flex: 1,
    marginLeft: spacing.sm,
    fontSize: 16
  }
});
