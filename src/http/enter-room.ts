export async function enterRoom(shortId: string | undefined) {
	const res = await fetch(`http://localhost:3333/rooms/${shortId}`);

	const room = await res.json();

	return {
		room: room.data[0],
	};
}
