import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getProfileLoading = (state: StateSchema) => state?.profile?.isLoading;
