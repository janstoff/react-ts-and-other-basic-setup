export function tripleNumber(number: number | string): number | undefined {
  if (typeof number === 'number') {
    return number * 3;
  }

  if (typeof number === 'string') {
    const convertedNumberFromString = Number(number);
    return isNaN(convertedNumberFromString)
      ? undefined
      : convertedNumberFromString * 3;
  }

  return undefined;
}
