import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import checkIcon from "../assets/icons/Check.png";

interface TodoInputProps {
  theme: string;
  addTask: (task: string) => void;
}

export function TodoInput({ addTask, theme }: TodoInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    //TODO - Call addTask and clean input value
    addTask(task);
    addTask("");
  }

  return (
    <View
      style={[
        theme === "light" ? styles.inputContainer : styles.inputContainerDark,
        Platform.OS === "ios"
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow,
      ]}
    >
      <TextInput
        style={[theme === "light" ? styles.input : styles.inputDark]}
        placeholder="Adicionar novo todo..."
        placeholderTextColor={theme === "light" ? "#000" : "#A09CB1"}
        returnKeyType="send"
        //TODO - use value, onChangeText and onSubmitEditing props
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[theme === "light" ? styles.addButton : styles.addButtonDark]}
        //TODO - onPress prop
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#F5F4F8",
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainerDark: {
    backgroundColor: "#34313D",
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#F5F4F8",
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: "#000",
  },
  inputDark: {
    flex: 1,
    backgroundColor: "#34313D",
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: "#A09CB1",
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    backgroundColor: "#3FAD27",
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonDark: {
    backgroundColor: "#988BC7",
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
