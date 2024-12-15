import React, { useState } from "react";
import { View, Text, Switch, TextInput, Button, Modal } from "react-native";
import {
  GeneratedPassword,
  PasswordSettings,
  generatePassword,
} from "../../Services/PasswordService";

import styles from "./Styles";
import { PasswordGeneratedModal } from "../PasswordGeneratedModal/PasswordGeneratedModal";

export function Menu() {
  const [generatedPassword, setGeneratedPassword] = useState<GeneratedPassword>(
    { password: undefined, settings: undefined }
  );
  const [settings, setSettings] = useState<PasswordSettings>({
    lowercase: true,
    uppercase: false,
    numbers: false,
    symbols: false,
    length: 8,
  });

  const btnDisabled =
    !settings.lowercase &&
    !settings.uppercase &&
    !settings.numbers &&
    !settings.symbols;

  const changeLength = (type: "increment" | "decrement"): void => {
    if (type === "increment") {
      setSettings((prev) => ({ ...prev, length: prev.length + 1 }));
    } else {
      setSettings((prev) => ({ ...prev, length: prev.length - 1 }));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de Senhas Seguras</Text>

      <View>
        <Text>Selecione a quantidade de Caracteres</Text>
        <View style={styles.lengthContainer}>
          <Button
            title=" - "
            onPress={() => changeLength("decrement")}
            disabled={settings.length <= 6}
          />
          <Text style={styles.charactersQuantityText}>{settings.length}</Text>
          <Button
            title=" + "
            onPress={() => changeLength("increment")}
            disabled={settings.length >= 20}
          />
        </View>
      </View>
      <View>
        <Text>Selecione abaixo as opções desejadas</Text>
      </View>
      <View style={styles.optionWrapper}>
        <Switch
          value={settings.lowercase}
          onValueChange={(value) =>
            setSettings((prev) => ({ ...prev, lowercase: value }))
          }
        />
        <Text>Letras minusculas</Text>
      </View>
      <View style={styles.optionWrapper}>
        <Switch
          value={settings.uppercase}
          onValueChange={(value) =>
            setSettings((prev) => ({ ...prev, uppercase: value }))
          }
        />
        <Text>Letras maiúsculas</Text>
      </View>
      <View style={styles.optionWrapper}>
        <Switch
          value={settings.numbers}
          onValueChange={(value) =>
            setSettings((prev) => ({ ...prev, numbers: value }))
          }
        />
        <Text>Números</Text>
      </View>
      <View style={[styles.optionWrapper, { marginBottom: 20 }]}>
        <Switch
          value={settings.symbols}
          onValueChange={(value) =>
            setSettings((prev) => ({ ...prev, symbols: value }))
          }
        />
        <Text>Símbolos</Text>
      </View>
      <Button
        disabled={btnDisabled}
        title="Gerar senha"
        onPress={() => {
          const newPassword = generatePassword(settings);
          setGeneratedPassword(newPassword);
        }}
      />
      {generatedPassword?.password && (
        <PasswordGeneratedModal
          password={generatedPassword.password}
          settings={generatedPassword.settings}
          onClose={() =>
            setGeneratedPassword({ password: undefined, settings: undefined })
          }
        />
      )}
    </View>
  );
}
