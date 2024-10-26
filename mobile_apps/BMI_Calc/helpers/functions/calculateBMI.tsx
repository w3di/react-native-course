export const calculateBMI = (
  age: number,
  weight: number,
  height: number,
  isManGender: boolean
): string => {
  const heightInMeters = height / 100;
  const bmi = weight / heightInMeters ** 2;

  let adjustmentFactor = 1;

  if (isManGender) {
    if (age < 30) {
      adjustmentFactor = 0.98;
    } else if (age < 50) {
      adjustmentFactor = 1.0;
    } else {
      adjustmentFactor = 1.02;
    }
  } else {
    if (age < 30) {
      adjustmentFactor = 0.95;
    } else if (age < 50) {
      adjustmentFactor = 1.0;
    } else {
      adjustmentFactor = 1.05;
    }
  }

  return (bmi * adjustmentFactor).toFixed(2);
};
