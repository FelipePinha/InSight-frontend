import { z } from "zod";
import Chat from "../assets/chat.svg";
import { Button } from "../components/ui/button";
import { Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { createRoom } from "../http/create-room";

const createRoomForm = z.object({
	question: z.string().min(1, "Você precisa preencher este campo!"),
});

type CreateRoomForm = z.infer<typeof createRoomForm>;

export function CreateRoom() {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<CreateRoomForm>({
		resolver: zodResolver(createRoomForm),
	});

	async function handleCreateRoom(formData: CreateRoomForm) {
		const { room } = await createRoom(formData.question);

		reset();
		navigate(`/room/${room.shortId}`);
	}

	return (
		<div className="flex items-center w-full px-3">
			<form
				onSubmit={handleSubmit(handleCreateRoom)}
				className="flex flex-col items-center w-full space-y-8"
			>
				<div className="flex flex-col items-center space-y-3">
					<img src={Chat} alt="icone de chat" />
					<label
						htmlFor="question"
						className="text-zinc-500 text-sm font-medium text-center"
					>
						Faça uma pergunta, peça uma opinião, uma receita de bolo...
					</label>
				</div>
				<div className="relative w-full">
					<div
						className={`w-full px-4 py-2  pb-12 h-56 resize-none bg-zinc-50 border-2 rounded-lg placeholder-zinc-400 outline-none text-sm ${errors.question?.message ? "border border-red-600" : "border-sky-400"}`}
					>
						<textarea
							className="w-full h-[90%] resize-none outline-none bg-zinc-50 text-lg md:text-base"
							id="question"
							placeholder="O que você deseja perguntar?"
							{...register("question")}
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
