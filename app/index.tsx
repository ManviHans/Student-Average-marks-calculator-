import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function App() {
  const [name, setName] = useState("");

  const [math, setMath] = useState("");
  const [physics, setPhysics] = useState("");
  const [chemistry, setChemistry] = useState("");
  const [english, setEnglish] = useState("");
  const [computer, setComputer] = useState("");

  const [average, setAverage] = useState("");
  const [percentage, setPercentage] = useState("");
  const [showResult, setShowResult] = useState(false);

  const saveStudent = async () => {
    const total =
      Number(math) +
      Number(physics) +
      Number(chemistry) +
      Number(english) +
      Number(computer);

    const avg = total / 5;
    const percent = (total / 500) * 100;

    setAverage(avg.toFixed(2));
    setPercentage(percent.toFixed(2));
    setShowResult(true);

    await addDoc(collection(db, "students"), {
      name: name,
      math: Number(math),
      physics: Number(physics),
      chemistry: Number(chemistry),
      english: Number(english),
      computer: Number(computer),
      average: avg,
      percentage: percent
    });

    alert("Student data saved ✅");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Student Marks App</Text>

      <TextInput
        style={styles.input}
        placeholder="Student Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput style={styles.input} placeholder="Math Marks" keyboardType="numeric" value={math} onChangeText={setMath} />
      <TextInput style={styles.input} placeholder="Physics Marks" keyboardType="numeric" value={physics} onChangeText={setPhysics} />
      <TextInput style={styles.input} placeholder="Chemistry Marks" keyboardType="numeric" value={chemistry} onChangeText={setChemistry} />
      <TextInput style={styles.input} placeholder="English Marks" keyboardType="numeric" value={english} onChangeText={setEnglish} />
      <TextInput style={styles.input} placeholder="Computer Marks" keyboardType="numeric" value={computer} onChangeText={setComputer} />

      <TouchableOpacity style={styles.button} onPress={saveStudent}>
        <Text style={styles.buttonText}>Calculate & Save</Text>
      </TouchableOpacity>

      {showResult && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Name: {name}</Text>
          <Text style={styles.resultText}>Average: {average}</Text>
          <Text style={styles.resultText}>Percentage: {percentage}%</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff"
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  resultBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 8
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5
  }
});
