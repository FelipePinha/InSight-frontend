export async function createRoom(question: string) {
	const res = await fetch("http://localhost:3333/rooms", {
		method: "post",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({
			question: question,
		}),
	});

	const data = await res.json();

	return {
		room: data.room,
	};
}
