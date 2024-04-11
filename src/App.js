import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Mail } from "./pages/mail";
import { Profile } from "./pages/profile";

const router = createBrowserRouter([
  { path: "/", element: <Mail /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/profile", element: <Profile /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
