interface CreateAnswerRequest {
	answer: string;
	roomId: string;
}

export async function createAnswer({ answer, roomId }: CreateAnswerRequest) {
	await fetch("http://localhost:3333/answer", {
		method: "post",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({
			answer,
			roomId,
		}),
	});
}
