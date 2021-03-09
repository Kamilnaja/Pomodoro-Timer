import { NextFunction } from 'express';

export const setError = (next: NextFunction, ...fields: string[]) => {
  const info = `Wrong ${fields}`;
  console.log(info);
  next(info);
};

export const shouldShowNextPeriod = (currentDate: Date, searchedDate: Date): boolean => {
  if (searchedDate.getFullYear() < currentDate.getFullYear()) {
    return true;
  } else if (
    searchedDate.getFullYear() === currentDate.getFullYear() &&
    searchedDate.getMonth() < currentDate.getMonth()
  ) {
    return true;
  }
  return false;
};

export const shouldShowPreviousPeriod = (dateCreated: Date, searchedDate: Date): boolean => {
  if (searchedDate.getFullYear() > dateCreated.getFullYear()) {
    return true;
  } else if (
    searchedDate.getFullYear() === dateCreated.getFullYear() &&
    searchedDate.getMonth() > dateCreated.getMonth()
  ) {
    return true;
  }
  return false;
};
