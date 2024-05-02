import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getProfileValidateError = (state: StateSchema) => state?.profile?.validateError;
