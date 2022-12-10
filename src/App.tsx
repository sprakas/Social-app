import Login from './pages/login/Login'
import Register from './pages/register/Register';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import NavBar from './components/navBar/NavBar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import { Children, useContext } from 'react';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import './style.scss';
import { DarkModeContext } from './context/darkModeContext';

function App() {

  const currentUser = false;

  const {darkMode} = useContext(DarkModeContext);

  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to='/login'/>
    }
    return children;
  }
  const Layout = () => {
    return (
      <div className={`${darkMode == 'true' ? 'theme-dark': 'theme-light'}`}>
        <NavBar/>
        <div style={{display:'flex'}}>
          <LeftBar/>
          <div style={{flex:7}}>
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: 'profile',
          element: <Profile/>
        }
      ]
    },

    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
