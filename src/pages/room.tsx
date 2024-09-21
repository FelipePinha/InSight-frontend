import { useState } from "react";
import UserIcon from "../assets/user-icon.svg";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { useQuery } from "@tanstack/react-query";
import { enterRoom } from "../http/enter-room";
import { useParams } from "react-router-dom";

interface AnswerResponseList {
	id: string;
	roomId: string;
	answer: string;
}

export function Room() {
	const { shortId } = useParams();

	const { data } = useQuery({
		queryFn: () => enterRoom(shortId),
		queryKey: ["room"],
	});

	const [isTextareaOpen, setIsTextareaOpen] = useState(false);

	function openTextarea() {
		setIsTextareaOpen(true);
	}

	function closeTextarea() {
		setIsTextareaOpen(false);
	}

	return (
		<div className="flex flex-col items-center p-5 space-y-10">
			<div className="space-y-3 w-full flex flex-col items-start md:w-2/3">
				<h2 className="font-medium text-2xl">{data?.room.question}</h2>

				{!isTextareaOpen && (
					<Button onClick={openTextarea} size="sm">
						Responder
					</Button>
				)}
			</div>

			{isTextareaOpen && (
				<div className="w-full md:w-1/2 space-y-3">
					<label className="text-zinc-500" htmlFor="answer">
						Escreva uma resposta
					</label>
					<Textarea id="answer" className="w-full" />
					<Button onClick={closeTextarea} variant="normal">
						Cancelar
					</Button>
				</div>
			)}

			<div className="space-y-3 w-full flex flex-col items-start md:w-2/3">
				{data?.room.answers.map((answer: AnswerResponseList) => {
					return (
						<div
							key={answer.id}
							className="w-full flex items-center gap-5 p-5 bg-sky-300/30 rounded-md"
						>
							<img src={UserIcon} alt="foto do usuário" />
							<p className="text-zinc-900">{answer.answer}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
