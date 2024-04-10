import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'widgets/Loader/ui/Loader';

export const AppRouter = () => (
    <Suspense
        fallback={(
            <div>
                <Loader />
            </div>
        )}
    >
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    element={<div className="page-wrapper">{element}</div>}
                    path={path}
                    key={path}
                />
            ))}
        </Routes>
    </Suspense>
);
