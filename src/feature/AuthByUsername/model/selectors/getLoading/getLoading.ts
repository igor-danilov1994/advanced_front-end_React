import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getLoading = (state: StateSchema) => state?.login?.isLoading;
