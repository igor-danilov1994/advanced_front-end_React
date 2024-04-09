import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Главная страница')}
            {t('тема ')}
        </div>
    );
};

export default MainPage;
