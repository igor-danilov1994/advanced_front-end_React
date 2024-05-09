import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getCommentsLoading = (state: StateSchema) => state.comments?.isLoading;
