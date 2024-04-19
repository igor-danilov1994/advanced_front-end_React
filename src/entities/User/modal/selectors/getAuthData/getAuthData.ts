import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getAuthData = (state: StateSchema) => state.user.authData;
