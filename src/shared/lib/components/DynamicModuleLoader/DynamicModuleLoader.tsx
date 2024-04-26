import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/provider/StoreProvider';
import { StateSchemaKey } from 'app/provider/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removedAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removedAfterUnmount } = props;

    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]) => {
            store.reducerManager.add(reducerName as StateSchemaKey, reducer);
        });

        return () => {
            Object.entries(reducers).forEach(([reducerName]) => {
                if (removedAfterUnmount) store.reducerManager.remove(reducerName as StateSchemaKey);
            });
        };
    }, [store.reducerManager, reducers, removedAfterUnmount]);

    return <div>{children}</div>;
};
