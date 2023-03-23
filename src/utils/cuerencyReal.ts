export function formatReal(value: number | string): string {
	const formatter = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 3 });

	return formatter.format(Number(value));
}