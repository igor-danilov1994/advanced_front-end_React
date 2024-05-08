import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'widgets/Loader/ui/Loader';
import {
    AppRouterProps,
    routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/provider/router/ui/RequireAuth';

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = <>{route.element}</>;

        return (
            <Route
                element={
                    route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : element
                }
                path={route.path}
                key={route.path}
            />
        );
    }, []);

    return (
        <Suspense
            fallback={(
                <div>
                    <Loader />
                </div>
            )}
        >
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
};
