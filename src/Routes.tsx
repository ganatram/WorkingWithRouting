import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { App } from './App';
import { ProductPage } from './pages/ProductPage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { lazy, Suspense } from 'react';

const AdminPage = lazy(() => import('./pages/admin/Admin'));

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
      {
        path: 'admin',
        element: (
          <Suspense fallback={<div> loading... </div>}>
            <AdminPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={myRouterTree} />; // routing placeholder
}
