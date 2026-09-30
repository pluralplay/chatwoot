// Russian has three plural forms (1 обращение / 2 обращения / 5 обращений).
// Locale strings use "one | few | many", or "zero | one | few | many"
// where the English source has a separate zero form.
const russianPluralRule = (choice, choicesLength) => {
  const n = Math.abs(choice);
  const offset = choicesLength === 4 ? 1 : 0;
  if (offset && n === 0) return 0;
  if (choicesLength - offset < 3) return n === 1 ? 0 : choicesLength - 1;

  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return offset;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return offset + 1;
  }
  return offset + 2;
};

export const pluralRules = {
  ru: russianPluralRule,
};
