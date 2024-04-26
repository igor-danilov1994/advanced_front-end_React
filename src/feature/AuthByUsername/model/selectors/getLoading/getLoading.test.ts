import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { getLoading } from './getLoading';

describe('getError.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            login: { isLoading: true },
        };
        expect(getLoading(state as StateSchema)).toBe(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoading(state as StateSchema)).toBe(undefined);
    });
});
