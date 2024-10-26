export const resultToText = (result: string): string => {
  const numericBmi = parseFloat(result);

  switch (true) {
    case numericBmi < 18.5:
      return "Underweight";
    case numericBmi >= 18.5 && numericBmi < 24.9:
      return "Normal weight";

    case numericBmi >= 25 && numericBmi < 29.9:
      return "Overweight";

    case numericBmi >= 30:
      return "Obesity";
    default:
      return "Invalid BMI value";
  }
};
