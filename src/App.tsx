import "./globals.css";
import { Home } from "./_root/pages";
import SignInForm from "./_auth/forms/SigninForm";
import SignUpForm from "./_auth/forms/SignupForm";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public Route */}
        <Route element={<AuthLayout />}>
          <Route path="/sign_in" element={<SignInForm />} />
          <Route path="/sign_up" element={<SignUpForm />} />
        </Route>
        {/* private Route */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};
export default App;
