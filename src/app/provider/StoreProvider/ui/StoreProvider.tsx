import { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/provider/StoreProvider';
import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as StateSchema);

    // @ts-ignore
    return <Provider store={store}>{children}</Provider>;
};
