import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import SegmentedControl from '@components/SegmentedControl';
import spacing from '@theme/spacing';
import colors from '@theme/colors';
import { Assets } from '@assets/index';

const DATA = new Array(6).fill(0).map((_, i) => ({
  id: `msg-${i}`,
  name: 'Name',
  message: 'Message Example',
  time: '09:46 am'
}));

export default function MessagesScreen() {
  const [filter, setFilter] = React.useState('All');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Message</Text>
      </View>

      <View style={{ paddingHorizontal: spacing.xl }}>
        <SegmentedControl options={['All', 'Appointment', 'Lab Result']} value={filter} onChange={setFilter} />
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: spacing.xl, paddingVertical: spacing.md }}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image source={Assets.doctor1} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <View style={styles.rowHeader}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { paddingHorizontal: spacing.xl, paddingTop: spacing.xl, paddingBottom: spacing.md },
  title: { fontSize: 22, fontWeight: '800' },
  row: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: '#fff',
    padding: spacing.md,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#EEE',
    marginBottom: spacing.sm,
    alignItems: 'center'
  },
  avatar: { width: 52, height: 52, borderRadius: 12, backgroundColor: '#E5E7EB' },
  rowHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  name: { fontWeight: '700', fontSize: 16 },
  time: { color: colors.subtitle, fontSize: 12 },
  message: { color: colors.subtitle, marginTop: 4 }
});
