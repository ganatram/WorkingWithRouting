/* import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { Header } from './Header';

const myRouterTree = createBrowserRouter([
  {
    path: '/', // tracks the BrowserURL state
    element: <Header />, // Serves the corrensponding component
  },
  {
    path: 'products', // tracks the BrowserURL state
    element: <ProductsPage />, // Serves the corrensponding component
  },
]);

export function Routes() {
  return <RouterProvider router={myRouterTree} />;
} */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { Header } from './Header';

const myRouterTree = createBrowserRouter([
  {
    path: '/', // default
    element: <Header />,
  },

  {
    path: 'products', // tracks the BrowserURL state
    element: <ProductsPage />, // provides the relevant component
  },
  {},
]);

export function Routes() {
  return <RouterProvider router={myRouterTree} />; // routing placeholder
}
