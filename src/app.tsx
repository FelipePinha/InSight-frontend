import { Outlet } from "react-router-dom";
import { Header } from "./components/header";

export function App() {
	return (
		<div className="space-y-5">
			<Header />
			<div className="max-w-screen-xl mx-auto">
				<Outlet />
			</div>
		</div>
	);
}
