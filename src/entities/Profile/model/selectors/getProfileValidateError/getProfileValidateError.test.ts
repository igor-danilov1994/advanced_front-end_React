import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { getProfileValidateError } from './getProfileValidateError';

describe('getProfileValidateError.test', () => {
    test('should return array', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileError.INCORRECT_COUNTRY],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
    });
});
