import { Check } from "phosphor-react-native";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export const Checkbox = () => {
  return (
    <View style={styles.WrapperCheckBox}>
      <TouchableOpacity style={styles.CheckBox}>
        <Check />
      </TouchableOpacity>

      <Text style={styles.LabelCheck}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  CheckBox: {
    width: 25,
    height: 25,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  WrapperCheckBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  LabelCheck: {
    color: "#fff",
    marginLeft: 6, // Para que não fique colado ao checkbox
  },
});
