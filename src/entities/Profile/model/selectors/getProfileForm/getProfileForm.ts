import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getProfileForm = (state: StateSchema) => state?.profile?.form;
