import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    border: 1,
    borderStyle: "solid",
    borderColor: "#333333",
    borderRadius: 8,
    paddingRight: 20,
    paddingLeft: 16,
    marginBottom: 8,
  },

  taskText: {
    fontWeight: "normal",
    fontSize: 14,
    maxWidth: 600,
    color: "#fff",
    marginLeft: 8,
  },

  trash: {
    background: "transparent",
    border: 0,
    color: "#333333",
    cursor: "pointer",
    lineHeight: 0,
    borderRadius: 2,
  },

  wrapper: {
    flexDirection: "row",
    alignItems: "center",

    cursor: "pointer",
    flex: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    borderWidth: 2,

    justifyContent: "center",
    alignItems: "center",
  },

  checkboxUnchecked: {
    borderColor: "#4EA8DE",
  },

  checkboxChecked: {
    borderColor: "#8284fa",
    backgroundColor: "#8284fa",
  },

  checkedText: {
    textDecorationLine: "line-through",
    color: "#808080",
  },

  uncheckedText: {
    color: "#f2f2f2",
  },
});
