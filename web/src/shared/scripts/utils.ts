import { LoginProps } from '../../auth/login/component/LoginComponent';
import { RegisterProps } from '../../auth/register/container/RegisterContainer';
import { AuthState } from '../../auth/store/interfaces/auth.state';

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
  const hrs = (s - mins) / 60;

  return pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
};

export const handleCloseModal = (prevFormState: AuthState, currentFormState: RegisterProps | LoginProps) => {
  if (currentFormState.auth.isSuccess !== prevFormState.isSuccess && currentFormState.auth.isSuccess) {
    setTimeout(() => {
      currentFormState.handleClose();
    }, 3000);
  }
};

export const getCurrentMonth = (givenMonth?: string): string => {
  return givenMonth ? givenMonth : String(new Date().getMonth());
};

export const getYear = () => new Date().getFullYear().toString();
