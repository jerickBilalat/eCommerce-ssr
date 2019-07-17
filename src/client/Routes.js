import HomePage from './pages/HomePage';
import MinRecShop from './pages/MinRecHome';
import NotFoundPage from './pages/NotFoundPage';
import ArticleListPage from './pages/ArticleListPage';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...MinRecShop,
        path:'/minrec',
        exact: true
      },
      {
        path: '/articles/:id',
        ...ArticleListPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
