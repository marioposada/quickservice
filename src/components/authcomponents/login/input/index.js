import React from "react";
import { View, Text, TextInput } from "react-native";
import Label from "../label";
import { styles } from "./styles";

const Input = ({
  editable,
  children,
  value,
  onChangeText,
  onFocus,
  onBlur,
  maxLength,
  placeholder,
  placeholderTextColor,
  keyboardType,
  hasError,
  error,
  touched,
  isMailValid,
  isPasswordValid,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Label {...props}>
        <TextInput
         
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          {...props}
        />
      </Label>

      {hasError && touched && <Text style={styles.helperText}>{error}</Text>}
    </View>
  );
};

export default Input;
