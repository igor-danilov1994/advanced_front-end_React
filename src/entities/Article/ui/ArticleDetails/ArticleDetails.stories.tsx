import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Article, ArticleBlocksType } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
    <ArticleDetails {...args} />
);

const art: Article = {
    id: '1',
    title: 'JavaScript new',
    subtitle: 'Что нового в JS',
    img: 'https://static.javatpoint.com/images/javascript/javascript_logo.png',
    views: 1012,
    created: '25.02.2024',
    user: {
        id: '1',
        username: 'user',
    },
    type: ['IT'],
    blocks: [
        {
            id: '1',
            title: 'Заголовок этого блока',
            type: ArticleBlocksType.TEXT,
            paragraphs: [
                'Когда мы сталкиваемся с длительными операциями, такими как сетевые запросы или транзакции в базу данных, '
          + 'то надо быть уверенным, что запуск происходит в фоновом потоке. Если же забыть об этом, то можно получить '
          + 'блокировку UI потока еще до того, как задача закончится. А во время блокировки UI пользователь не сможет '
          + 'взаимодействовать с приложением.\n\n\nК сожалению, когда мы запускаем задачу в фоне, то не можем использовать '
          + "результат тут же. Для этого нам потребуется некая разновидность callback'а. Когда callback будет вызван "
          + 'с результатом, только тогда мы сможем продолжить, например запустить еще один сетевой запрос.\n\n\n'
          + 'Простой пример того, как люди приходят к "callback hell": несколько вложенных callback\'ов, все '
          + 'ждут вызова когда долгоиграющая операция закончится.',
            ],
        },
        {
            id: '2',
            type: ArticleBlocksType.CODE,
            code:
        'fun retrieveIssues() {\n    githubApi.retrieveUser() { user ->\n        '
        + 'githubApi.repositoriesFor(user) { repositories ->\n            '
        + 'githubApi.issueFor(repositories.first()) { issues ->\n                '
        + 'handler.post { \n                    textView.text = "You have issues!"'
        + ' \n                }\n            }\n        }\n    }\n}',
        },
        {
            id: '3',
            title: 'Заголовок этого блока',
            type: ArticleBlocksType.IMAGE,
            src: 'https://static.javatpoint.com/images/javascript/javascript_logo.png',
        },
    ],
};

export const Primary = Template.bind({});
Primary.args = {
    article: art,
};
Primary.decorators = [
    StoreDecorator({
        articlesDetails: {
            data: art,
            isLoading: false,
        },
        articles: {
            data: [art],
            isLoading: false,
        },
    }),
];
