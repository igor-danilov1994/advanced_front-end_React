import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { getUsername } from './getUsername';

describe('getUsername', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            login: { username: 'username' },
        };
        expect(getUsername(state as StateSchema)).toEqual('username');
    });
    test('should work with empty username', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUsername(state as StateSchema)).toEqual('');
    });
});
