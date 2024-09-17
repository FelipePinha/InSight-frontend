import { DoorOpen, Users } from "lucide-react";
import LadyEarth from "../assets/lady-earth.svg";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function Home() {
	return (
		<div className="flex items-center gap-5 justify-center">
			<div className="hidden md:flex w-[40%]">
				<img
					className="w-full"
					src={LadyEarth}
					alt="garota segurando o planeta terra"
				/>
			</div>
			<section className="w-full md:w-[60%] p-5">
				<div className="flex flex-col space-y-5">
					<form className="space-y-5">
						<h2 className="text-center font-semibold text-2xl">
							Entre em uma discussão
						</h2>
						<div className="flex flex-col space-y-3">
							<Input placeholder="Código da sala" />
							<Button>
								<DoorOpen />
								Entrar na sala
							</Button>
						</div>
					</form>

					<div className="w-full flex items-baseline gap-5">
						<div className="border border-zinc-400 flex-1 h-[1px]" />
						<p className="text-zinc-400 text-lg">ou</p>
						<div className="border border-zinc-400 flex-1 h-[1px]" />
					</div>

					<div className="flex flex-col space-y-3">
						<h2 className="text-center font-semibold text-2xl">
							Crie sua própria sala
						</h2>

						<Button variant="secondary">
							<Users />
							Criar sala
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
