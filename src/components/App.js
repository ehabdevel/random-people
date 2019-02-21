import React from "react";
import { AppRegistry, StyleSheet, View } from "react-native";
import Header from "./header";
import Home from "./home";

class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Header title="Random People" />
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});

AppRegistry.registerComponent("App", () => App);

export default App;
