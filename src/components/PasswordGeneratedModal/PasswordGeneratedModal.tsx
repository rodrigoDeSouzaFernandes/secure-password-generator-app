import React from "react";
import { Button, Modal, Text, TextInput, View } from "react-native";

import { styles } from "./Styles";
import {
  calcPasswordStrength,
  PasswordSettings,
} from "../../Services/PasswordService";
import { PasswordStrength } from "../PasswordStrength/PasswordStrength";

export function PasswordGeneratedModal({
  password,
  settings,
  onClose,
}: {
  password?: string;
  settings: PasswordSettings;
  onClose: Function;
}) {
  const strength = calcPasswordStrength(settings);

  return (
    <Modal style={styles.container}>
      <View style={{ width: "90%", margin: "auto", height: '100%' }}>
        <Text style={styles.title}>Senha gerada com sucesso:</Text>
        <Text style={styles.password}>{password}</Text>
        <PasswordStrength passwordStrengthPoints={strength} />
        <View style={styles.buttonGoBack}>
          <Button title="Voltar" onPress={() => onClose()} />
        </View>
      </View>
    </Modal>
  );
}
