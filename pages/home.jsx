import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Home() {
  return (
    <View>
      <Text style={styles.text}>Mi casa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Home;