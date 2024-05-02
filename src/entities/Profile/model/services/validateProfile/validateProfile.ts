import { Profile } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

export const validateProfile = (profile?: Profile) => {
    const error: ValidateProfileError[] = [];

    if (!profile) return [ValidateProfileError.INCORRECT_DATA];

    const {
        lastname, first, age, country,
    } = profile;

    if (!first || !lastname) error.push(ValidateProfileError.INCORRECT_USER_DATA);
    if (!age) error.push(ValidateProfileError.INCORRECT_AGE);
    if (!country) error.push(ValidateProfileError.INCORRECT_COUNTRY);

    return error;
};
