import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Ola mundo</Text>
      <Text style={styles.text}>Ola mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'IBMPlexSans',
  },
});
