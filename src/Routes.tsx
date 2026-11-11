import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { App } from './App';
import { ProductPage } from './pages/ProductPage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';

const myRouterTree = createBrowserRouter([
  {
    path: '/', // default
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: '/',
        index: true,
        element: <HomePage />,
      },

      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:id', // {id:1}
        element: <ProductPage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={myRouterTree} />; // routing placeholder
}
