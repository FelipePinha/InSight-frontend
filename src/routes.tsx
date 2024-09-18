import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { App } from "./app";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";

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
			{
				path: "room/:shortId",
				element: <Room />,
			},
		],
	},
]);
