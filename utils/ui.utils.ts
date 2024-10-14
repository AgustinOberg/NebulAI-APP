export const hex2rgba = (hex: string, alpha: number = 1): string => {
  let hexFormatted = hex.replace(/^#/, '');
  if (hexFormatted.length === 3) {
    hexFormatted = hexFormatted
      .split('')
      .map((char) => char + char)
      .join('');
  }

  const hexPattern = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const result = hexPattern.exec(hexFormatted);
  if (!result) {
    return hex;
  }
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
