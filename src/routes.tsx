import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { App } from "./app";
import { CreateRoom } from "./pages/create-room";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/create-room",
				element: <CreateRoom />,
			},
		],
	},
]);
