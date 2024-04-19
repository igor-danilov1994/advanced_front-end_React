import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getError = (state: StateSchema) => state?.login?.error;
