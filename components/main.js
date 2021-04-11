import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

//close keyboard when screen is clicked
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const Adder = ({ num1, num2, onChange }) => {
  function reset(event) {
    onChange();
  }

  let realAnswer = num1 + num2;
  const [answer, setAnswer] = useState("");
  const winCondition = (text) => {
    setAnswer(text);
  };
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : ""}
        style={styles.container}
      >
        <View style={styles.top}>
          <View style={styles.winStatement}>
            <Text style={[styles.text]}>
              {realAnswer == answer ? "YOU WIN!" : ""}
            </Text>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              {num1} + {num2}
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <TextInput
            keyboardType="numeric"
            style={styles.answerContainer}
            placeholder="Enter your Answer!"
            onChangeText={(text) => winCondition(text)}
            value={answer}
          />
          <View style={styles.endIcon}>
            <Text style={styles.text} onPress={reset}>
              {realAnswer == answer ? "PLAY AGAIN!" : ""}
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  top: {
    flex: 0.2,
  },
  winStatement: {
    alignItems: "center",
    marginBottom: 60,
  },
  questionContainer: {
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: "green",
  },
  question: {
    fontSize: 50,
  },
  answerContainer: {
    textAlign: "center",
    fontSize: 25,
    borderWidth: 3,
    borderColor: "red",
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  endIcon: {
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  bottom: {
    flex: 0.2,
    justifyContent: "space-around",
  },
});

export default Adder;
