import { View } from "react-native";
import LogoSvg from "../../../assets/logo.svg";
import { styles } from "./styles";
export const Header = () => {
  return (
    <View style={styles.container}>
      <LogoSvg />
    </View>
  );
};
