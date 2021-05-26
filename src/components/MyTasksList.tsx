import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from "react-native";

function FlatListHeaderComponent() {
  return (
    <View>
      <Text style={styles.header}>Minhas tasks</Text>
    </View>
  );
}

function FlatListHeaderComponentDark() {
  return (
    <View>
      <Text style={styles.headerDark}>Minhas tasks</Text>
    </View>
  );
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  theme: string;
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  theme,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            //TODO - use onPress, onLongPress and style props
            style={[
              item.done && theme === "light"
                ? styles.taskButtonDone
                : styles.taskButton,
              item.done && theme === "dark"
                ? styles.taskButtonDoneDark
                : styles.taskButton,
            ]}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            {theme === "light" ? (
              <>
                <View
                  testID={`marker-${index}`}
                  //TODO - use style prop
                  style={[
                    item.done ? styles.taskMarkerDone : styles.taskMarker,
                  ]}
                />
                <Text
                  //TODO - use style prop
                  style={[item.done ? styles.taskTextDone : styles.taskText]}
                >
                  {item.title}
                </Text>
              </>
            ) : (
              <>
                <View
                  testID={`marker-${index}`}
                  //TODO - use style prop
                  style={[
                    item.done
                      ? styles.taskMarkerDoneDark
                      : styles.taskMarkerDark,
                  ]}
                />
                <Text
                  //TODO - use style prop
                  style={[
                    item.done ? styles.taskTextDoneDark : styles.taskTextDark,
                  ]}
                >
                  {item.title}
                </Text>
              </>
            )}
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={
        theme === "light" ? (
          <FlatListHeaderComponent />
        ) : (
          <FlatListHeaderComponentDark />
        )
      }
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#3D3D4D",
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  headerDark: {
    color: "#67E480",
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3D3D4D",
    marginRight: 10,
  },
  taskMarkerDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#67E480",
    marginRight: 10,
  },
  taskText: {
    color: "#3D3D4D",
  },
  taskTextDark: {
    color: "#67E480",
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "rgba(25, 61, 223, 0.1)",
    flexDirection: "row",
    alignItems: "center",
  },
  taskButtonDoneDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "rgba(68, 71, 90, 0.3)",
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#273FAD",
    marginRight: 10,
  },
  taskMarkerDoneDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#67E480",
    marginRight: 10,
  },
  taskTextDone: {
    color: "#A09CB1",
    textDecorationLine: "line-through",
  },
  taskTextDoneDark: {
    color: "#E1E1E6",
    textDecorationLine: "line-through",
  },
});
