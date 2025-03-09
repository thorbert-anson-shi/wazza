export const timeToString = (secs: number) => {
	const h = Math.floor(secs / 3600);
	const mm = Math.floor(secs / 60) % 60;
	const ss = (secs % 60).toString().padStart(2, '0');

	return `${h > 0 ? h + 'h' : ''} ${h > 0 || mm > 0 ? mm.toString().padStart(2, '0') + 'm' : ''} ${ss + 's'}`;
};
