import React, { FC, memo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
}

export const RequireAuth: FC<RequireAuthProps> = memo((props) => {
    const auth = useSelector(getAuthData);

    const location = useLocation();
    const { children } = props;

    if (!auth) {
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }

    return <div style={{ width: '100%' }}>{children}</div>;
});
