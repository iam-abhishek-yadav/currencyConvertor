import { useEffect, useState } from "react";

interface ExchangeRates {
    [key: string]: number;
}

function useCurrencyInfo(currency: string): ExchangeRates {
    const [data, setData] = useState<ExchangeRates>({});

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
            .then((res: { [key: string]: ExchangeRates }) => {
                const currencyData = res[currency];
                if (currencyData) {
                    setData(currencyData);
                } else {
                    throw new Error(`Currency data for ${currency} not found`);
                }
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
