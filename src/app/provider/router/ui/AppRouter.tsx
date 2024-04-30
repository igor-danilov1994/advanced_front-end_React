import { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'widgets/Loader/ui/Loader';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User/modal/selectors/getAuthData/getAuthData';

export const AppRouter = () => {
    const isAuth = useSelector(getAuthData);

    const routes = useMemo(
        () => Object.values(routeConfig).filter((route) => route.authOnly && isAuth),
        [isAuth],
    );

    return (
        <Suspense
            fallback={(
                <div>
                    <Loader />
                </div>
            )}
        >
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        element={<div className="page-wrapper">{element}</div>}
                        path={path}
                        key={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
