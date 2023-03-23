export function formatDollar(value: number | string, symbol = false): string {
	const formatter = new Intl.NumberFormat("en", { maximumFractionDigits: 3 });

	let money = formatter.format(Number(value));

	if (symbol) {
		money = "$" + money;
	}

	return money;
}