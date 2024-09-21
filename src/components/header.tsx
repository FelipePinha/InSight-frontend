import { useParams } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Button } from "./ui/button";
import { Copy, Plus } from "lucide-react";

export function Header() {
	const { shortId } = useParams();

	return (
		<header className="h-20 px-20 flex justify-between items-center">
			<div className="flex items-center gap-3">
				<img className="w-28" src={Logo} alt="insight logos" />
				<h1 className="font-bold text-3xl">
					In<span className="text-sky-500">.</span>Sight
				</h1>
			</div>

			{shortId && (
				<div className="flex items-center gap-3">
					<Button variant="secondary">
						<Copy className="size-5" />
						{shortId}
					</Button>
					<Button>
						<Plus className="size-5" />
						Nova sala
					</Button>
				</div>
			)}
		</header>
	);
}
