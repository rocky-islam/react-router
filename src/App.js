import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Product/Product';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>This is default page</div>},
    { path: '/home', element: <Home></Home>},
    { path: '/about', element: <About></About>},
    { path: '/product', element: <Product></Product>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
