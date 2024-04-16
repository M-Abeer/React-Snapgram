import "./global.css";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public Routes */}
        <Route path="/sign-in" element={<SignInForm />}></Route>
        {/* private Route */}
        <Route index element={<Home />}></Route>
      </Routes>
    </main>
  );
};

export default App;
