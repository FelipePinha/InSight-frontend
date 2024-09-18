import Logo from "../assets/logo.png";

export function Header() {
	return (
		<header className="h-20 px-20 flex items-center">
			<img className="w-28" src={Logo} alt="insight logos" />
			<h1 className="font-bold text-3xl">
				In<span className="text-sky-500">.</span>Sight
			</h1>
		</header>
	);
}
