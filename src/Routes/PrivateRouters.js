import { Navigate, useLocation } from 'react-router-dom';
import PrimaryLoading from '../Components/LoadingSpin/PrimaryLoading';
import BodyTemplate from '../Components/share/Template/BodyTemplate';
import { useFirebaseInfo } from '../Context/UserContext';

const PrivateRouters = ({ children }) => {

    const { user, loading } = useFirebaseInfo();
    const location = useLocation()
    // console.log(location);
    if (loading) {
        return <BodyTemplate >
            <PrimaryLoading
                color={"#0000FF"}
            />
        </BodyTemplate>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
};

export default PrivateRouters;