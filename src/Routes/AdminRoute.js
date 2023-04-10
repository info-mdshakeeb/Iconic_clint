import { useQuery } from "@tanstack/react-query";
import { Navigate, useLocation } from "react-router-dom";
import PrimaryLoading from "../Components/LoadingSpin/PrimaryLoading";
import { useFirebaseInfo } from "../Context/UserContext";

const AdminRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useFirebaseInfo();
    const { data: useR = [], isLoading } = useQuery({
        queryKey: ['useR', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await fetch(`http://localhost:3210/api/v2/users?email=${user?.email}`)
            const data = await res.json()
            return data.data[0]
        }
    })
    if (loading || isLoading) {
        return <div className="w-full mx-auto flex justify-center items-center h-screen">
            <PrimaryLoading></PrimaryLoading>
        </div>
    }
    if (useR?.role === 'admin') {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />

};

export default AdminRoute;