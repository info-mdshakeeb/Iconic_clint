import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routers';


function App() {

  // const [loadingM, setLoadingM] = useState(false);

  // useEffect(() => {
  //   setLoadingM(true)
  //   setTimeout(() => {
  //     setLoadingM(false)
  //   }, 1200)
  // }, [])
  // const { user } = useFirebaseInfo()
  // if (!user) return <div className="flex justify-center h-screen items-center">
  //   <img src={Loading} height='300px' width='300px' alt="" />
  // </div>

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
