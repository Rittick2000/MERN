
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import StudentProfile from './components/StudentProfile';

function App() {
  const route=createBrowserRouter(
    [
      {
        path: "/",
        element: 
        <div>
          <Navbar/>
          <Home/>
        </div>
      },
      {
        path: "/About",
        element: 
        <div>
          <Navbar/>
          <About/>
        </div>
      },
      {
        path: "/Dashboard",
        element: 
        <div>
          <Navbar/>
          <Dashboard/>
        </div>
      },
      {
        path: "/students/:id",
        element: 
        <div>
          <Navbar/>
          <StudentProfile/>
        </div>
      },
    ]
  );
  return (
    <> 
      <RouterProvider router={route}/>
    </>
  )
}

export default App
