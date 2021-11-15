import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLogin } = useAuth();
    if (isLogin) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <div className='animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500'></div>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user?.displayName || user?.email) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
