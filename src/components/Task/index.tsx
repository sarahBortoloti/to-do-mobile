import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import React, { useState } from "react";
import { Check, Trash } from "phosphor-react-native";

type TaskProps = {
  task: string;
  onDeleteTask: (task: string) => void;
  onCompletedTask: (task: string, isChecked: boolean) => void;
};

export const Task = ({ task, onDeleteTask, onCompletedTask }: TaskProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const onCheckTask = () => {
    setIsChecked(!isChecked);
    onCompletedTask(task, isChecked);
  };

  return (
    <View style={styles.card}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={[
            styles.checkbox,
            !isChecked ? styles.checkboxUnchecked : styles.checkboxChecked,
          ]}
          onPress={() => onCheckTask()}
        >
          {isChecked && <Check size={16} color="#fff" />}
        </TouchableOpacity>

        <Text
          style={[
            styles.taskText,
            !isChecked ? styles.uncheckedText : styles.checkedText,
          ]}
        >
          {task}
        </Text>
      </View>
      <TouchableOpacity style={styles.trash} onPress={() => onDeleteTask(task)}>
        <Trash size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
};
