import { LoginSchema } from 'feature/AuthByUsername';
import {
    loginActions,
    loginReducer,
} from 'feature/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
    test('loginSlice set username', async () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };

        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername('124134')),
        ).toEqual({ username: '124134' });
    });

    test('loginSlice return password', async () => {
        const state: DeepPartial<LoginSchema> = { password: 'password' };

        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('password')),
        ).toEqual({ password: 'password' });
    });
});
