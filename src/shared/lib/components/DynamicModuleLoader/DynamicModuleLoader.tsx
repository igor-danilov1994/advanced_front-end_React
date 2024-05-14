import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/provider/StoreProvider';
import { StateSchemaKey } from 'app/provider/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removedAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removedAfterUnmount = true } = props;
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducers).forEach(([reducerName, reducer]) => {
            const mounted = mountedReducers[reducerName as StateSchemaKey];

            if (!mounted) {
                store.reducerManager.add(reducerName as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${reducerName} reducer` });
            }
        });

        return () => {
            Object.entries(reducers).forEach(([reducerName]) => {
                if (removedAfterUnmount) {
                    store.reducerManager.remove(reducerName as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${reducerName} reducer` });
                }
            });
        };
    }, [store.reducerManager, reducers, removedAfterUnmount, dispatch]);

    return <div>{children}</div>;
};
