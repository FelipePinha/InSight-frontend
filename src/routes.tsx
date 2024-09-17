import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { App } from "./app";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])