import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '@theme/colors';
import spacing from '@theme/spacing';

interface Props {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function SegmentedControl({ options, value, onChange }: Props) {
  return (
    <View style={styles.container}>
      {options.map((opt) => {
        const isActive = value === opt;
        return (
          <TouchableOpacity key={opt} onPress={() => onChange(opt)} style={[styles.chip, isActive && styles.activeChip]}>
            <Text style={[styles.text, isActive && styles.activeText]}>{opt}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', gap: spacing.sm },
  chip: {
    backgroundColor: colors.chip,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 18
  },
  activeChip: { backgroundColor: '#E0ECFF', borderWidth: 1, borderColor: colors.primary },
  text: { color: '#111', fontWeight: '600' },
  activeText: { color: colors.primary }
});
