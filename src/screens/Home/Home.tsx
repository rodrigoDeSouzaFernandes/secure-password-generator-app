import React from "react";
import { Text, View } from "react-native";
import styles from "./Styles";
import { Menu } from "../../components/Menu/Menu";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home works!</Text>
      <Menu/>
    </View>
  );
}
