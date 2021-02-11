export const msToTime = (s: number): string => {
  // Pad to 2 or 3 digits, default is 2
  const pad = (n: number, z?: number) => {
    z = z || 2;
    return ('00' + n).slice(-z);
  };

  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;

  return pad(mins) + ':' + pad(secs);
};

export const getCurrentMonth = (givenMonth?: number): number => {
  return givenMonth ? givenMonth : new Date().getMonth();
};

export const getCurrentYear = (): number => new Date().getFullYear();

export const getCurrentDay = (): number => new Date().getDate();
