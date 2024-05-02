import { Country, Currency } from 'shared/const/common';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  INCORRECT_DATA = 'INCORRECT_DATA',
}

export interface Profile {
  username?: string;
  password?: string;
  first?: string;
  lastname?: string;
  age?: number;
  country?: Country;
  city?: string;
  currency?: Currency;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly?: boolean;
  validateError?: ValidateProfileError[];
}
