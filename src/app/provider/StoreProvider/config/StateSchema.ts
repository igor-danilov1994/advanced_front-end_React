import { UserSchema } from 'entities/User';
import { LoginSchema } from 'feature/AuthByUsername';

export interface StateSchema {
    user: UserSchema;
    login: LoginSchema
}
