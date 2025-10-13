import React from 'react';
import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent, ViewStyle } from 'react-native';
import colors from '@theme/colors';
import spacing from '@theme/spacing';

interface Props {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
}

export default function PrimaryButton({ title, onPress, style }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.button, style]}> 
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 2
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  }
});
