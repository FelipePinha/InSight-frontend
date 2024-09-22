import { z } from "zod";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAnswer } from "../http/create-answer";
import { useQueryClient } from "@tanstack/react-query";

interface CreateAnswerFieldProps {
	closeTextarea: () => void;
	roomId: string;
}

const createAnswerForm = z.object({
	answer: z.string().min(1),
});

type CreateAnswerForm = z.infer<typeof createAnswerForm>;

export function CreateAnswerField({
	closeTextarea,
	roomId,
}: CreateAnswerFieldProps) {
	const queryClient = useQueryClient();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<CreateAnswerForm>({
		resolver: zodResolver(createAnswerForm),
	});

	async function handleCreateAnswer(data: CreateAnswerForm) {
		await createAnswer({
			answer: data.answer,
			roomId,
		});

		queryClient.invalidateQueries({ queryKey: ["room"] });

		reset();
		closeTextarea();
	}

	return (
		<form
			onSubmit={handleSubmit(handleCreateAnswer)}
			className="w-full md:w-5/6 space-y-3"
		>
			<label className="text-zinc-500" htmlFor="answer">
				Escreva uma resposta
			</label>
			<Textarea
				id="answer"
				className={`w-full ${errors.answer ? "border-red-600 focus-visible:border-red-600 ring-red-600/15" : ""}`}
				{...register("answer")}
			/>
			<div className="flex items-center gap-3">
				<Button onClick={closeTextarea} variant="normal">
					Cancelar
				</Button>
				<Button type="submit">Responder</Button>
			</div>
		</form>
	);
}
