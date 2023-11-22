import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ProductsByCategories from './pages/ProductsByCategory.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import productLoader from './loaders/productsLoader.js'
import './index.css'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productLoader
      },
      {
        path: "/category/:name",
        element: <ProductsByCategories />,
        loader: ({ params }) => {
          return fetch(`https://dummyjson.com/products/category/${params.name}`);
        }
      },
      {
        path: "/products/:id",
        element: <ProductDetails />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
