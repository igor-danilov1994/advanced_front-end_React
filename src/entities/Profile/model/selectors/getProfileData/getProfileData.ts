import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getProfileData = (state: StateSchema) => state?.profile?.data;
export const getProfileForm = (state: StateSchema) => state?.profile?.form;
