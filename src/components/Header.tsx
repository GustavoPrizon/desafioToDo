import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface Headerprops {
  theme: string;
  onUserAction: () => void;
}

export function Header({ theme, onUserAction }: Headerprops) {
  return (
    <View style={[theme === "light" ? styles.header : styles.headerDark]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
        do
      </Text>
      <TouchableOpacity
        style={styles.headerButton}
        activeOpacity={0.7}
        onPress={onUserAction}
      >
        <Text style={styles.headerButtonText}>
          {theme === "light" ? "DARK" : "LIGHT"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerDark: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#483c67",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
  headerButton: {
    position: "absolute",
    right: 10,
    top: 25,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  headerButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
