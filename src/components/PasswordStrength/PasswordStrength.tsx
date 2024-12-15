import React from "react";
import { Text, View } from "react-native";

import { styles } from "./Styles";
import { LinearGradient } from "expo-linear-gradient";

const strengthLevels = {
  0: { text: "Muito Fraca", emoji: "😱", style: styles.level1 },
  1: { text: "Muito Fraca", emoji: "😱", style: styles.level1 },
  2: { text: "Fraca", emoji: "😨", style: styles.level2 },
  3: { text: "Média", emoji: "😐", style: styles.level3 },
  4: { text: "Boa", emoji: "😊", style: styles.level4 },
  5: { text: "Forte", emoji: "😆", style: styles.level5 },
  6: { text: "Muito forte", emoji: "😍", style: styles.level6 },
};

export function PasswordStrength({
  passwordStrengthPoints,
}: {
  passwordStrengthPoints: keyof typeof strengthLevels;
}) {
  return (
    <View style={styles.container}>
      <Text style={{ paddingBottom: 10 }}>
        Nível da senha:{" "}
        <Text style={{ fontWeight: "bold" }}>
          {strengthLevels[passwordStrengthPoints].text}!{" "}
          {strengthLevels[passwordStrengthPoints].emoji}
        </Text>
      </Text>
      <LinearGradient
        style={styles.level}
        colors={[
          "#fc1406",
          "#ffa500",
          "#e0e500",
          "#c3ca00",
          "#4fa83f",
          "#227e18",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text
          style={[
            styles.indicator,
            strengthLevels[passwordStrengthPoints].style,
          ]}
        >
          ☝
        </Text>
      </LinearGradient>
    </View>
  );
}
