import { ProfileSchema } from 'entities/Profile';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice.test', () => {
    test('profileSlice changeReadonly', async () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(
            profileReducer(
        state as ProfileSchema,
        profileActions.changeReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });
    test('profileSlice changeProfile', async () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: 'username' },
        };

        expect(
            profileReducer(
        state as ProfileSchema,
        profileActions.changeProfile({ username: 'username' }),
            ),
        ).toEqual({ form: { username: 'username' } });
    });
});
