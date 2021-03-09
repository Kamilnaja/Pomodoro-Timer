import { NextFunction } from 'express';

export const setError = (next: NextFunction, ...fields: string[]) => {
  const info = `Wrong ${fields}`;
  console.log(info);
  next(info);
};

export const shouldShowNextPeriod = (date: Date, searchedDate: Date): boolean => {
  if (searchedDate.getFullYear() < date.getFullYear()) {
    return true;
  } else if (searchedDate.getFullYear() === date.getFullYear() && searchedDate.getMonth() < date.getMonth()) {
    return true;
  }
  return false;
};

export const shouldShowPreviousPeriod = (dateCreated: Date, searchedYear: number, searchedMonth: number): boolean => {
  const month = dateCreated.getMonth() + 1;

  if (searchedYear > dateCreated.getFullYear()) {
    return true;
  } else if (searchedYear === dateCreated.getFullYear() && searchedMonth > month) {
    return true;
  }
  return false;
};
