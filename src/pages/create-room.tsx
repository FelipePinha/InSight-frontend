import Chat from "../assets/chat.svg";
import { Button } from "../components/ui/button";
import { Lock } from "lucide-react";

export function CreateRoom() {
	return (
		<div className="flex items-center w-full">
			<form className="flex flex-col items-center w-full space-y-8">
				<div className="flex flex-col items-center space-y-3">
					<img src={Chat} alt="icone de chat" />
					<label
						htmlFor="question"
						className="text-zinc-500 text-sm font-medium"
					>
						Faça uma pergunta, peça uma opinião, uma receita de bolo...
					</label>
				</div>
				<div className="relative w-full">
					<div className="w-full px-4 py-2  pb-12 h-48 resize-none bg-zinc-50 border-2 rounded-lg placeholder-zinc-400 outline-none text-sm border-sky-400">
						<textarea
							className="w-full h-[90%] resize-none outline-none bg-zinc-50"
							id="question"
							placeholder="O que você deseja perguntar?"
						/>
					</div>
					<div className="absolute flex justify-between items-center w-full">
						<div className="flex items-center gap-2 absolute bottom-4 left-3 text-zinc-400 text-xs">
							<Lock className="size-5" />
							<p>Esta pergunta é anônima</p>
						</div>
						<Button type="submit" className="absolute bottom-3 right-3">
							Enviar
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
