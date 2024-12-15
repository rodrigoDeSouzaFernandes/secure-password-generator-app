import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    width: '80%',
  },

  optionWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  lengthContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    marginBottom: 20
  },

  charactersQuantityText: {
    width: 20,
    textAlign: "center",
  },
});

export default styles;
