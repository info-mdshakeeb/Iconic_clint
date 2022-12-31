import { useContext, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Loading from './assets/Library-2.gif';
import { AuthUser } from './Context/UserContext';
import { router } from './Routes/Routers';


function App() {
  const { loading, user } = useContext(AuthUser)
  const [loadingM, setLoadingM] = useState(false);

  useEffect(() => {
    setLoadingM(true)
    setTimeout(() => {
      setLoadingM(false)
    }, 1200)
  }, [])

  if (loadingM) return <div className="flex justify-center h-screen items-center">
    <img src={Loading} height='300px' width='300px' alt="" />
  </div>

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
