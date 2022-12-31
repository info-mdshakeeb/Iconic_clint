import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthUser } from './Context/UserContext';
import { router } from './Routes/Routers';

function App() {
  const { loading, user } = useContext(AuthUser)

  // if (loading && user) return <div className="flex justify-center h-screen items-center">
  //   <img src={Loading} height='300px' width='300px' alt="" />
  // </div>
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
