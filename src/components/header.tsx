import Logo from "../assets/logo.png";

export function Header() {
	return (
		<header className="h-20 p-5 flex items-center">
			<img className="w-32" src={Logo} alt="insight logos" />
			<h1 className="font-bold text-3xl">In.Sight</h1>
		</header>
	);
}
