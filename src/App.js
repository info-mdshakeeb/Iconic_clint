import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routers';

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
