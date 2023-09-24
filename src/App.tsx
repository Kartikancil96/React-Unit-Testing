import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MainLayout from "./Layout/MainLayout";
import Addtable from './Pages/Addtable';
import Home from './Pages/Home';
import Edittable from './Pages/Edittable';
import Profile from './Pages/Profile';


function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/add',
          element: <Addtable />
        },
        {
          path: '/edit/:id',
          element: <Edittable />
        },
        {
          path: '/profile',
          element: <Profile />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />

  )
}

export default App
