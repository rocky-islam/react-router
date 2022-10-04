import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Product/Product';
import Main from './layout/Main';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Post from './components/Post/Post';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/product", element: <Product></Product> },
        { 
          path: "/friends",
          loader: async() =>{
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element:<Friends></Friends> },
          {
            path:'/friend/:friendId',
            loader: async ({params}) =>{
              // console.log(params.friendId);
              return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
              
            },
            element: <FriendDetail></FriendDetail>
          },
          {
            path:'post',
            loader: async () =>{
              return fetch("https://jsonplaceholder.typicode.com/posts");
            },
            element: <Post></Post>
          },
          {
            path: 'post/:postId',
            loader: async ({params}) =>{
              return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
            },
            element: <PostDetails></PostDetails>
          }
      ],
    },

    { path: "/about", element: <About></About> },
    { path: "*", element: <div>Page not Found</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
