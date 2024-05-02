import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getProfileReadonly = (state: StateSchema) => state?.profile?.readonly;
