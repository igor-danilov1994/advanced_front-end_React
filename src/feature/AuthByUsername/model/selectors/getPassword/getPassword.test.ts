import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { getPassword } from './getPassword';

describe('getLoginState', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            login: { password: '123' },
        };
        expect(getPassword(state as StateSchema)).toEqual('123');
    });
    test('should work with empty password', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getPassword(state as StateSchema)).toEqual('');
    });
});
