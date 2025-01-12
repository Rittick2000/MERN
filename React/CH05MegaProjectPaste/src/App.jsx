
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';

const route= createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <div className="w-screen h-full flex flex-col">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: '/pastes',
      element: 
      <div className="w-screen h-full flex flex-col">
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path: '/pastes/:id',
      element: 
      <div className="w-screen h-full flex flex-col">
        <Navbar/>
        <ViewPaste/>
      </div>
    },
  ]
);

function App() {
  

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
