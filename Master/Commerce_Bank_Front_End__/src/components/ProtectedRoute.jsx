import { Navigate, Route } from "react-router-dom";
import { checkLoggedIn } from "../services/auth.service";

function ProtectedRoute(props) {
    if (checkLoggedIn()) {
        return (
            <Route {...props} />
        );
    }

    return (
        <Navigate to={"/login"} />
    );
}

export default ProtectedRoute;