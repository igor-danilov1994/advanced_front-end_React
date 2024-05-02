import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { Country, Currency } from 'shared/const/common';
import { getProfileForm } from './getProfileForm';

const data = {
    username: 'admin',
    age: 22,
    country: Country.USA,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};
describe('getProfileForm.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
