import { DoorOpen, Users } from "lucide-react";
import LadyEarth from "../assets/lady-earth.svg";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { type ChangeEvent, useState } from "react";

export function Home() {
	const navigate = useNavigate();
	const [roomShortId, setRoomShortId] = useState("");
	const [error, setError] = useState("");

	function redirectToRoom() {
		if (!roomShortId) {
			setError("Preencha o campo com um código");

			return;
		}

		navigate(`/room/${roomShortId}`);
	}

	function changeRoomShortId(e: ChangeEvent<HTMLInputElement>) {
		const { value } = e.target;

		if (value) setError("");

		setRoomShortId(value);
	}

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
					<div className="space-y-5">
						<h2 className="text-center font-semibold text-2xl">
							Entre em uma discussão
						</h2>
						<div className="flex flex-col space-y-3">
							<span className="text-xs text-red-600">{error}</span>
							<Input
								className={`${error ? "border-red-600" : ""}`}
								onChange={changeRoomShortId}
								maxLength={5}
								placeholder="Código da sala"
							/>
							<Button onClick={redirectToRoom}>
								<DoorOpen />
								Entrar na sala
							</Button>
						</div>
					</div>

					<div className="w-full flex items-baseline gap-5">
						<div className="border border-zinc-400 flex-1 h-[1px]" />
						<p className="text-zinc-400 text-lg">ou</p>
						<div className="border border-zinc-400 flex-1 h-[1px]" />
					</div>

					<div className="flex flex-col space-y-3">
						<h2 className="text-center font-semibold text-2xl">
							Crie sua própria sala
						</h2>

						<Link className="w-full" to="create-room">
							<Button className="w-full" variant="secondary">
								<Users />
								Criar sala
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
