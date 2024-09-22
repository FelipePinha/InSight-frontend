import { useState } from "react";
import UserIcon from "../assets/user-icon.svg";
import { Button } from "../components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { enterRoom } from "../http/enter-room";
import { useParams } from "react-router-dom";
import { CreateAnswerField } from "../components/create-answer-field";

interface AnswerResponseList {
	id: string;
	roomId: string;
	answer: string;
}

export function Room() {
	const { shortId } = useParams();
	const [isTextareaOpen, setIsTextareaOpen] = useState(false);

	const { data } = useQuery({
		queryFn: () => enterRoom(shortId),
		queryKey: ["room"],
	});

	function openTextarea() {
		setIsTextareaOpen(true);
	}

	function closeTextarea() {
		setIsTextareaOpen(false);
	}

	return (
		<div className="flex flex-col items-center p-5 space-y-10">
			<div className="space-y-3 w-full flex flex-col sm:flex-row justify-between items-start sm:items-baseline md:w-5/6">
				<h2 className="font-medium text-2xl">{data?.room.question}</h2>

				{!isTextareaOpen && (
					<Button onClick={openTextarea} size="sm">
						Responder
					</Button>
				)}
			</div>

			{isTextareaOpen && (
				<CreateAnswerField
					roomId={data?.room.id}
					closeTextarea={closeTextarea}
				/>
			)}

			<div className="space-y-3 w-full flex flex-col items-start md:w-5/6">
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
