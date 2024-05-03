import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getInited = (state: StateSchema) => state.user._inited;
