import { useEffect, useState } from "react";

interface CurrencyData {
	[key: string]: number;
}

function useCurrencyInfo(currency: string): CurrencyData {
	const [data, setData] = useState<CurrencyData>({});

	useEffect(() => {
		fetch(
			`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
		)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to fetch data");
				}
				return res.json();
			})
			.then((res: CurrencyData) => {
				setData(res);
			})
			.catch((error) => {
				console.error("Error fetching currency data:", error);
			});
	}, [currency]);

	return data;
}

export default useCurrencyInfo;
