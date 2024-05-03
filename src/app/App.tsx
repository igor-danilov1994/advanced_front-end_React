import { Suspense, useEffect } from 'react';

import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from 'app/provider/router';
import { useDispatch, useSelector } from 'react-redux';
import { getInited, userActions } from 'entities/User';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const _inited = useSelector(getInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    {_inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
