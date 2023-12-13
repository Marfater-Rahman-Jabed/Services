import { useContext } from "react";
import { AuthContexts } from "../../Contexts/Contexts";
import { Navigate, useLocation, } from "react-router-dom";
import Loading from "../../Component/Loading/Loading";
// import BigLoading from "../../Components/Loading/BigLoading";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContexts)
    const location = useLocation()
    // const navigate = useNavigate()
    if (loading) {
        return <Loading></Loading>
    }

    if (!user?.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;


};

export default PrivateRoutes;