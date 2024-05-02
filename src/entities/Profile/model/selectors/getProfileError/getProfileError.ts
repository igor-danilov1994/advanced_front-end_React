import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getProfileError = (state: StateSchema) => state?.profile?.error;
