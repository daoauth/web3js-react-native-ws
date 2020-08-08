/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Button} from 'react-native';
const Web3 = require('web3');

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          new Web3('https://mainnet.infura.io/');
        </Text>
        <Button
          title="HTTP Provider"
          onPress={() => {
            new Web3('https://mainnet.infura.io/');
          }}
        />
      </View>
      <View>
        <Text style={styles.title}>new Web3('wss://mainnet.infura.io/');</Text>
        <Button
          title="Websocket Provider"
          color="#f194ff"
          onPress={() => {
            new Web3('wss://mainnet.infura.io/');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
