import { useState } from "react";
import UserIcon from "../assets/user-icon.svg";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";

export function Room() {
	const [isTextareaOpen, setIsTextareaOpen] = useState(false);

	function openTextarea() {
		setIsTextareaOpen(true);
	}

	function closeTextarea() {
		setIsTextareaOpen(false);
	}

	return (
		<div className="flex flex-col items-center space-y-10">
			<div className="space-y-3 w-1/2">
				<h2 className="font-medium text-2xl">
					O São Paulo vai ganhar o jogo contra o botafogo?
				</h2>

				{!isTextareaOpen && (
					<Button onClick={openTextarea} size="sm">
						Responder
					</Button>
				)}
			</div>

			{isTextareaOpen && (
				<div className="w-1/2 space-y-3">
					<label className="text-zinc-500" htmlFor="answer">
						Escreva uma resposta
					</label>
					<Textarea id="answer" className="w-full" />
					<Button onClick={closeTextarea} variant="normal">
						Cancelar
					</Button>
				</div>
			)}

			<div className="flex flex-col space-y-3 w-1/2">
				<div className="flex items-center gap-5 p-5 bg-sky-300/30 rounded-md">
					<img src={UserIcon} alt="foto do usuário" />
					<p className="text-zinc-900">
						Claro que sim porra, aqui é são paulo vamooooo!
					</p>
				</div>
				<div className="flex items-start gap-5 p-5 bg-sky-300/30 rounded-md">
					<img src={UserIcon} alt="foto do usuário" />
					<p className="text-zinc-900">
						Claro que sim porra, aqui é são paulo vamooooo! Claro que sim porra,
						aqui é são paulo vamooooo!
					</p>
				</div>
			</div>
		</div>
	);
}
