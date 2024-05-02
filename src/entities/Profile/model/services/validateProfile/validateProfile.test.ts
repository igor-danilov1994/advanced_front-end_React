import { Country, Currency } from 'shared/const/common';
import { Profile } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfile } from './validateProfile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.USA,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('validateProfile.test', () => {
    test('should return value', () => {
        expect(validateProfile(data as Profile)).toEqual([]);
    });
    test(`should return error ${ValidateProfileError.INCORRECT_DATA}`, () => {
        expect(validateProfile()).toEqual([ValidateProfileError.INCORRECT_DATA]);
    });
    test(`should return error ${ValidateProfileError.INCORRECT_AGE}`, () => {
        expect(validateProfile({ ...data, age: undefined })).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test(`should return error ${ValidateProfileError.INCORRECT_USER_DATA}`, () => {
        expect(validateProfile({ ...data, first: '' })).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test(`should return error ${ValidateProfileError.INCORRECT_COUNTRY}`, () => {
        expect(validateProfile({ ...data, country: undefined })).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
