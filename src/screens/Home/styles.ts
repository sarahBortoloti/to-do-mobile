import { fontWeights } from "./../../../../design-system/packages/tokens/src/font-weights";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  content: {
    paddingHorizontal: 24,
  },
  form: {
    flexDirection: "row",
    marginTop: -24,
  },
  input: {
    flex: 1,
    padding: 16,
    height: 54,
    backgroundColor: "#262626",
    border: 1,
    borderStyle: "solid",
    borderColor: "#0D0D0D",
    borderRadius: 6,
    marginRight: 4,
    fontSize: 16,
    color: "#808080",
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    height: 52,
    width: 52,

    backgroundColor: "#1E6F9F",
    borderRadius: 6,
  },

  countHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    height: 40,

    marginTop: 32,

    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    borderStyle: "solid",
  },

  createdTasksCountText: {
    color: "#4EA8DE",
    fontWeight: "bold",
  },

  finishedTasksCountText: {
    color: "#8284FA",
    fontWeight: "bold",
  },

  contentCount: {
    flexDirection: "row",
  },

  count: {
    width: 25,
    height: 19,
    backgroundColor: "#333333",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  countText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
