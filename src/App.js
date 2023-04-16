import 'react-lazy-load-image-component/src/effects/blur.css';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { router } from './Routes/Routers';


function App() {

  return (
    <div className="">
      <RouterProvider router={router} />
      <ToastContainer
        autoClose={500}
      />
    </div>
  );
}

export default App;
