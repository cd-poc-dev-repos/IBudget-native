import React from "react";
import { TextInput } from "react-native";
import * as Type from "./TextEntry.type";

const TextEntry = ({ value, placeholder, handleOnChange }: Type.ITextEntry) => {
  return (
    <TextInput
      style={{
        height: 60,
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
      }}
      value={value}
      onChangeText={handleOnChange}
      placeholder={placeholder}
    />
  );
};

export default TextEntry;
