
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage';
import PageLayout from './Layout/PageLayout';
import Page1 from './Pages/Page1';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout/>,
      children: [
        {
          index: true,
          element: <HomePage/>
        },
        {
          path: "/page-1",
          element: <Page1/>
        }
      ]
    },
  ]);

  console.log('🟢 App')

  return (
    <RouterProvider router={router} />
  )
}

export default App
