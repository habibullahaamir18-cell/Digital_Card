import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '@components/SearchBar';
import spacing from '@theme/spacing';
import colors from '@theme/colors';
import DoctorCard from '@components/DoctorCard';
import { sampleDoctors } from '@data/sampleDoctors';

const categories = [
  { id: 'diagnostic', label: 'Diagnostic', colors: ['#A78BFA', '#7C3AED'] },
  { id: 'pediatric', label: 'Pediatric', colors: ['#FDBA74', '#FB923C'] },
  { id: 'neurology', label: 'Neurology', colors: ['#60A5FA', '#3B82F6'] },
  { id: 'radiology', label: 'Radiology', colors: ['#6EE7B7', '#34D399'] }
];

export default function FindDoctorScreen() {
  const [query, setQuery] = React.useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 28 }}>
      <View style={{ paddingHorizontal: spacing.xl, paddingTop: spacing.lg }}>
        <SearchBar value={query} onChangeText={setQuery} />
      </View>

      <View style={{ paddingHorizontal: spacing.xl, marginTop: spacing.lg }}>
        <Text style={styles.findRow}><Text style={styles.find}>Find</Text> your doctor</Text>
      </View>

      <View style={styles.grid}>
        {categories.map((c) => (
          <TouchableOpacity key={c.id} activeOpacity={0.9}>
            <LinearGradient colors={c.colors} style={styles.tile}>
              <Text style={styles.tileText}>{c.label}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ paddingHorizontal: spacing.xl, marginTop: spacing.lg }}>
        <Text style={styles.topDoctors}>Top Doctors</Text>
      </View>

      <View style={{ paddingHorizontal: spacing.xl, marginTop: spacing.md, gap: spacing.md }}>
        {sampleDoctors.map((d) => (
          <DoctorCard key={d.id} photo={d.photo} name={d.name} specialty={d.specialty} hospital={d.hospital} rating={d.rating} reviews={d.reviews} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  findRow: { fontSize: 28, fontWeight: '400' },
  find: { fontWeight: '800' },
  grid: {
    paddingHorizontal: spacing.xl,
    marginTop: spacing.md,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: spacing.md
  },
  tile: {
    width: '47%',
    height: 110,
    borderRadius: 18,
    padding: spacing.lg,
    justifyContent: 'flex-end'
  },
  tileText: { color: '#fff', fontSize: 18, fontWeight: '800' },
  topDoctors: { fontSize: 16, fontWeight: '700' }
});
