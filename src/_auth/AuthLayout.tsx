import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthentication = false;
  return (
    <>
      {isAuthentication ? (
        <Navigate to="/" />
      ) : (
        <>
          <section>
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayout;
