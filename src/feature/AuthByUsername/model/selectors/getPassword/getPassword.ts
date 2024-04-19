import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getPassword = (state: StateSchema) => state?.login?.password ?? '';
