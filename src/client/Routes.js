import ProductListPage from './pages/plp';
import MinRecShop from './pages/MinRecHome';
import NotFoundPage from './pages/NotFoundPage';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...ProductListPage,
        path: '/',
        exact: true
      },
      {
        ...MinRecShop,
        path:'/minrec',
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
