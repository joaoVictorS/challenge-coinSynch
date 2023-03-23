export function formatDollar(value: number | string): string {
	const formatter = new Intl.NumberFormat("en", { maximumFractionDigits: 3 });

	return formatter.format(Number(value));
}