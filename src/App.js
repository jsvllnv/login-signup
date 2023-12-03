
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Login from './Components/LogIn/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './pages/Home';
import Accounts from './pages/Accounts/Accounts.jsx'
import Transaction from './pages/Transaction/Transaction';
import{
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><LoginSignup/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  },
  {
    path: '/home',
    element: <div><Home/></div>
  },
  {
    path: '/accounts',
    element: <div><Accounts/></div>
  },
  {
    path: '/transaction',
    element: <div><Transaction/></div>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}


export default App;
