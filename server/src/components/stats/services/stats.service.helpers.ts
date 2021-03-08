import { NextFunction } from 'express';

export const setError = (next: NextFunction, ...fields: string[]) => {
  const info = `Wrong ${fields}`;
  console.log(info);
  next(info);
};

export const shouldShowNextPeriod = (date: Date, searchedYear: number, searchedMonth: number): boolean => {
  const month = date.getMonth() + 1;

  if (searchedYear < date.getFullYear()) {
    return true;
  } else if (searchedYear === date.getFullYear() && searchedMonth < month) {
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
