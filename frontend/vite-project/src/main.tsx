import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './modules/store';

import RouterProvider from './libs/components/router-provider/router-provider';
import HomePage from './pages/home.tsx'
import ProductsPage from './pages/products.tsx'
import App from './App.tsx';
import NotFound from './pages/not-found.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider routes={[
        { 
          element: <App />, 
          path: "/", 
          children: [
            {element: <HomePage />, path: "/"},
            {element: <ProductsPage />, path: "/products"},
          ]
        },
        {
          element: <NotFound />,
          path: "*",
        }
      ]} />
    </Provider>
  </StrictMode>
)
