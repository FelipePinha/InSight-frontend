import { Outlet } from "react-router-dom";
import { Header } from "./components/header";

export function App() {
	return (
		<div className="max-w-screen-xl mx-auto space-y-5">
			<Header />
			<Outlet />
		</div>
	);
}
