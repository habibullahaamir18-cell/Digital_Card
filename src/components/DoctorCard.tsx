import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '@theme/colors';
import spacing from '@theme/spacing';
import { ImageSourcePropType } from 'react-native';

interface Props {
  photo: ImageSourcePropType;
  name: string;
  specialty: string;
  hospital: string;
  rating?: number;
  reviews?: number;
  onPress?: () => void;
}

export default function DoctorCard({ photo, name, specialty, hospital, rating = 4.8, reviews = 3920, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.container}>
      <Image source={photo} style={styles.photo} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.meta}>
          {specialty}  |  {hospital}
        </Text>
        <View style={styles.row}>
          <Ionicons name="star" size={14} color={colors.warning} />
          <Text style={styles.rating}>{rating.toFixed(1)} ({reviews.toLocaleString()} Reviews)</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: spacing.md,
    gap: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEE'
  },
  photo: { width: 64, height: 64, borderRadius: 12, backgroundColor: '#DDD' },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: '700', color: '#111' },
  meta: { color: colors.subtitle, marginTop: 2 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 6 },
  rating: { color: colors.subtitle }
});
