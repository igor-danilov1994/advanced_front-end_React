import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getUsername = (state: StateSchema) => state?.login?.username ?? '';
