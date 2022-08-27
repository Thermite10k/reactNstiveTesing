import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Ali");
  const [enteredName, setEnteredName] = useState();
  const [age, setAge] = useState("Ali");
  const [enteredAge, setEnteredAge] = useState();

  const newNameHandler = (e) => {
    setEnteredName(e);
  };
  const updateDataHandler = (e) => {
    setAge(enteredAge);
    setName(enteredName);
  };

  const newAgeHandler = (e) => {
    setEnteredAge(e);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text>the name is {name}</Text>
        <Text>the age is {age}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={updateDataHandler} title="UpdateName" />
      </View>
      <Text>Enter Name</Text>
      <TextInput
        multiline
        onChangeText={newNameHandler}
        style={styles.input}
        placeholder="e.g name"
      />
      <Text>Enter age</Text>
      <TextInput
        multiline
        keyboardType="numeric"
        onChangeText={newAgeHandler}
        style={styles.input}
        placeholder="e.g 25"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 50,
  },
});
