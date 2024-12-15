import { Settings } from "react-native";

export interface PasswordSettings {
  lowercase: boolean;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
  length: number;
}

export interface GeneratedPassword {
  password?: string;
  settings?: PasswordSettings;
}

type Strength = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const shuffleString = (string: string) => {
  return string
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export const generatePassword = (
  settings: PasswordSettings
): GeneratedPassword => {
  let passwordChars = "";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let characterPool = "";

  const addRandomCharacter = (reference: string) => {
    const index = Math.round(Math.random() * (reference.length - 1));

    passwordChars += reference[index];
  };

  if (settings.lowercase) {
    characterPool += lowercaseChars;
    addRandomCharacter(lowercaseChars);
  }

  if (settings.uppercase) {
    characterPool += uppercaseChars;
    addRandomCharacter(uppercaseChars);
  }

  if (settings.numbers) {
    characterPool += numberChars;
    addRandomCharacter(numberChars);
  }
  if (settings.symbols) {
    characterPool += symbolChars;
    addRandomCharacter(symbolChars);
  }

  while (passwordChars.length < settings.length) {
    addRandomCharacter(characterPool);
  }

  return { password: shuffleString(passwordChars), settings };
};

export const calcPasswordStrength = ({
  length,
  lowercase,
  uppercase,
  numbers,
  symbols,
}: PasswordSettings): Strength => {
  let strengthPoints: Strength = 0;

  [length >= 8, length >= 12, lowercase, uppercase, numbers, symbols].forEach(
    (condition) => {
      if (condition) {
        strengthPoints += 1;
      }
    }
  );

  return strengthPoints;
};
