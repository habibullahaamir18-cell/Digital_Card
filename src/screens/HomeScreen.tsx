import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Assets } from '@assets/index';
import colors from '@theme/colors';
import spacing from '@theme/spacing';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import DoctorCard from '@components/DoctorCard';
import { sampleDoctors } from '@data/sampleDoctors';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.greet}>Hi, Username!</Text>
          <Text style={styles.subGreet}>How are you Today?</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#111" />
      </View>

      <View style={styles.banner}>
        <LinearGradient colors={[colors.primary, '#5CA1FF']} style={styles.bannerBg}>
          <View style={styles.bannerText}>
            <Text style={styles.bannerTitle}>Book and{"\n"}Schedule with{"
            "}nearest doctor</Text>
            <TouchableOpacity style={styles.nearbyBtn}>
              <Text style={styles.nearbyText}>Find nearby</Text>
            </TouchableOpacity>
          </View>
          <Image source={Assets.bannerDoctor} style={styles.bannerImage} />
        </LinearGradient>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Doctor Specialty</Text>
        <TouchableOpacity onPress={() => navigation.navigate('FindDoctor')}>
          <Text style={styles.link}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.specialtiesRow}>
        {[
          { id: 'diagnostic', label: 'General', icon: 'fitness' },
          { id: 'neurologic', label: 'Neurologic', icon: 'trail-sign' },
          { id: 'pediatric', label: 'Pediatric', icon: 'medkit' },
          { id: 'radiology', label: 'Radiology', icon: 'flask' }
        ].map((s) => (
          <View key={s.id} style={styles.specialtyItem}>
            <View style={styles.specialtyIcon}>
              <Ionicons name={s.icon as any} size={22} color={colors.primary} />
            </View>
            <Text style={styles.specialtyLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommendation Doctor</Text>
        <TouchableOpacity onPress={() => navigation.navigate('FindDoctor')}>
          <Text style={styles.link}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={sampleDoctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: spacing.md }}>
            <DoctorCard
              photo={item.photo}
              name={item.name}
              specialty={item.specialty}
              hospital={item.hospital}
              rating={item.rating}
              reviews={item.reviews}
            />
          </View>
        )}
        scrollEnabled={false}
        contentContainerStyle={{ paddingHorizontal: spacing.xl }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl
  },
  greet: { fontSize: 16, fontWeight: '700' },
  subGreet: { color: colors.subtitle, marginTop: 2 },
  banner: { paddingHorizontal: spacing.xl, marginTop: spacing.md },
  bannerBg: {
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  bannerText: { flex: 1, padding: spacing.lg },
  bannerTitle: { color: '#fff', fontSize: 18, fontWeight: '800', lineHeight: 24 },
  nearbyBtn: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 18,
    marginTop: spacing.md
  },
  nearbyText: { color: colors.primary, fontWeight: '700' },
  bannerImage: { width: 120, height: 120, marginRight: spacing.lg },
  sectionHeader: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sectionTitle: { fontSize: 16, fontWeight: '700' },
  link: { color: colors.primary, fontWeight: '700' },
  specialtiesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    marginTop: spacing.md
  },
  specialtyItem: { alignItems: 'center', gap: 6 },
  specialtyIcon: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  specialtyLabel: { marginTop: 4, color: colors.subtitle, fontSize: 12 }
});
