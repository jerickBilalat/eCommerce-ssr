import ProductListPage from './pages/plp';
import PrdouctDetailPage from './pages/pdp';
import MinRecShop from './pages/MinRecHome';
import NotFoundPage from './pages/NotFoundPage';
import App from './App';
import cartPage from './pages/cartPage';

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
        ...PrdouctDetailPage,
        path: '/product_detail/:id',
        exact: true
      },
      {
        ...cartPage,
        path: '/cart',
        exact: true
      },
      {
        ...MinRecShop,
        path: '/minrec',
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
