import { View, Text } from "react-native";
import { styles } from "./styles";
import ClipboardSvg from "../../../assets/clipboard.svg";

export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <ClipboardSvg />

      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>

      <Text style={styles.description}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};
