import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style = {{
        color: 'red',
        fontSize:18,
      }}>Welcome</Text>
      <Text style={styles.title}>Todo App</Text>
      <Button title="Hello" onPress={() => {}}/>
    </View>
  );
};

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "blue",
    alignItems:'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight:'700',
    color:"#fff",
    fontSize: 32
  }
})