import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const addCommentFormText = (state: StateSchema) => state.addCommentForm?.text;
export const addCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
