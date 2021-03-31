export const isDateError = (year: string, month: string, day?: string): boolean => {
  if (day) {
    return !isYearCorrect(year) || !isMonthCorrect(month) || !isDayCorrect(day);
  } else {
    return !isYearCorrect(year) || !isMonthCorrect(month);
  }
};

export const isYearCorrect = (year: string): boolean => Number(year) >= 2020;
export const isMonthCorrect = (month: string): boolean => Number(month) >= 0 && Number(month) <= 12;
export const isDayCorrect = (day: string): boolean => Number(day) >= 0 && Number(day) <= 31;
