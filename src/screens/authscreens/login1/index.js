import React, { useState, useReducer, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../constants/theme";
import { styles } from "./styles";
import { signIn, signUp, updateStatus } from "../../../store/actions/";
import {
  validateInput,
  onFocusOut,
  onInputChange,
  UPDATE_FORM,
  UPDATE_STATUS,
} from "../../../utils";
import { Input } from "../../../components/authcomponents/login";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: false },
  password: { value: "", error: "", touched: false, hasError: false },
  isFormValid: false,
  isMailInvalid: false,
  isPasswordInvalid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    case UPDATE_STATUS:
      const { isMailInvalid, isPasswordInvalid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isMailInvalid,
        isPasswordInvalid,
      };

    default:
      return state;
  }
};

const LogIn1 = ({ navigation }) => {
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const isMailInvalid = useSelector((state) => state.auth.emailNotFound);
  const isPasswordInvalid = useSelector((state) => state.auth.invalidPassword);

  const onHandleSubmit = () => {
    dispatch(updateStatus());
    dispatch(signIn(formState.email.value, formState.password.value));
  };

  const onHandleChange = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  const onHandleBlur = (value, type) => {
    onFocusOut(type, value, dispatchFormState, formState);
  };

  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior="height">
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <Input
          style={styles.input}
          placeholder="ejemplo@gmail.com"
          placeholderTextColor={colors.grey_placeholder}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleChange(text, "email")}
          onEndEditing={(e) => onHandleBlur(e.nativeEvent.text, "email")}
          value={formState.email.value}
          label="Email"
          hasError={formState.email.hasError}
          error={formState.email.error}
          touched={formState.email.touched}
        />
        {isMailInvalid ? (
          <Text style={styles.helperText}>El email no existe</Text>
        ) : null}

        <Input
          style={styles.input}
          placeholder="ejemplo@gmail.com"
          placeholderTextColor={colors.grey_placeholder}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(text) => onHandleChange(text, "password")}
          onEndEditing={(e) => onHandleBlur(e.nativeEvent.text, "password")}
          value={formState.password.value}
          label="Password"
          hasError={formState.password.hasError}
          error={formState.password.error}
          touched={formState.password.touched}
        />
        {isPasswordInvalid ? (
          <Text style={styles.helperText}>La contraseña es incorrecta</Text>
        ) : null}

        <TouchableOpacity style={styles.buttonForgot}>
          <Text style={styles.textForgot}>Olvidaste tu password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onHandleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
        {/* <View style={styles.containerLine}>
          <Image source={require("../../../../assets/onboarding/Line1.png")} />
          <Text style={styles.textLine}>O iniciar con</Text>
          <Image source={require("../../../../assets/onboarding/Line1.png")} />
        </View>

        <View style={styles.containerSocial}>
          <TouchableOpacity style={styles.buttonSocial}>
            <Image
              style={styles.imageSocial}
              source={require("../../../../assets/onboarding/Google.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSocial}>
            <Image
              style={styles.imageSocial}
              source={require("../../../../assets/onboarding/Facebook.png")}
            />
          </TouchableOpacity>
        </View> */}
        <View style={styles.containerRegister}>
          <Text style={styles.textRegister}>¿No te has registrado aún?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp1")}
            style={styles.buttonRegister}
          >
            <Text style={styles.textRegisterBold}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LogIn1;
