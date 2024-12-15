import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    marginInline: "auto",
    height: 125,
    width: "80%",
    paddingBlock: 20,
  },

  level: {
    position: "relative",
    width: "100%",
    height: 10,
  },

  indicator: {
    position: "absolute",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: 32,
    padding: 0,
    margin: 0,
    top: 0,
  },

  level1: {
    left: 0,
  },
  level2: {
    left: "17%",
  },
  level3: {
    left: "34%",
  },
  level4: {
    left: "51%",
  },
  level5: {
    left: "68%",
  },
  level6: {
    left: "85%",
  },
});
