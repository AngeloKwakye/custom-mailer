import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Mail } from "./pages/mail";
import { Profile } from "./pages/profile";
import { ComposeMessage } from "./pages/compose-message";
import { Inbox } from "./pages/inbox";
import { Outbox } from "./pages/outboxx";
import { Trash } from "./pages/trash";
import { Archived } from "./pages/archive";

const router = createBrowserRouter([
  { path: "/", element: <Mail /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/composemessage", element: <ComposeMessage /> },
  { path: "/inbox", element: <Inbox /> },
  { path: "/outbox", element: <Outbox /> },
  { path: "/settings", element: <Profile /> },
  { path: "/trash", element: <Trash /> },
  { path: "/archived", element: <Archived /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
