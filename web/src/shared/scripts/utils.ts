export const msToTime = (s: number): string => {
  // Pad to 2 or 3 digits, default is 2
  const pad = (n: number, z?: number) => {
    z = z || 2;
    return ("00" + n).slice(-z);
  };

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return pad(hrs) + ":" + pad(mins) + ":" + pad(secs);
};

export const handleErrors = (response: any): Promise<any> => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
