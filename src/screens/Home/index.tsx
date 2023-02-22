import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";
import { Header } from "../../components/Header";
import { useState } from "react";
import { styles } from "./styles";
import PlusSvg from "../../../assets/plus.svg";
import { EmptyList } from "../../components/EmptyList";
import { Task } from "../../components/Task";

export const Home = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [finishedTasks, setFinishedTasks] = useState<string[]>([]);

  const handleCreateNewTask = () => {
    if (newTask && !tasks.includes(newTask)) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (taskToDelete: string) => {
    const taskWithoutDeletedOne = tasks.filter((task) => task !== taskToDelete);

    setTasks(taskWithoutDeletedOne);
    setFinishedTasks(taskWithoutDeletedOne);
  };

  function handleCompletedTask(taskToComplete: string, isChecked: boolean) {
    if (!isChecked) {
      setFinishedTasks([...finishedTasks, taskToComplete]);
    } else {
      const completedTasksWithoutDeletedOne = finishedTasks.filter(
        (task) => task !== taskToComplete
      );
      setFinishedTasks(completedTasksWithoutDeletedOne);
    }
  }
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setNewTask}
            value={newTask}
          />

          <TouchableOpacity style={styles.button} onPress={handleCreateNewTask}>
            <PlusSvg color="#ffff" />
          </TouchableOpacity>
        </View>

        <View style={styles.countHeader}>
          <View style={styles.contentCount}>
            <Text style={styles.createdTasksCountText}>Criadas</Text>

            <View style={styles.count}>
              <Text style={styles.countText}>{tasks.length}</Text>
            </View>
          </View>

          <View style={styles.contentCount}>
            <Text style={styles.finishedTasksCountText}>Concluídas</Text>

            <View style={styles.count}>
              <Text style={styles.countText}>{finishedTasks.length}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              task={item}
              onCompletedTask={handleCompletedTask}
              onDeleteTask={handleDeleteTask}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  );
};
