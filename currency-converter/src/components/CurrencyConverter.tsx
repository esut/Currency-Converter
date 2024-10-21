import { useState, useEffect } from 'react';
import { Currency, ExchangeRateResponse } from '../types/index.js'; // إضافة .js في النهاية


const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [amount, setAmount] = useState<number>(1);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const currencies: Currency[] = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'JPY', name: 'Japanese yen' },
    { code: 'AED', name: 'UAE Dirham' },
    { code: 'SAR', name: 'Saudi Riyal' }
  ];

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}?apikey=4f538175a5f76af2847c089d`
        );
        const data: ExchangeRateResponse = await response.json();
        setExchangeRate(data.rates[toCurrency]);
      } catch (err) {
        setError('There was an error fetching exchange rates.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const handleSwapCurrencies = (): void => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const convertedAmount = amount * (exchangeRate || 0);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Currency Converter</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="0"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
              From
              </label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.name} ({currency.code})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSwapCurrencies}
              className="mt-6 p-2 rounded-full hover:bg-gray-100"
              aria-label="Currency exchange"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M7 10l5-5 5 5" />
                <path d="M7 14l5 5 5-5" />
              </svg>
            </button>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To
              </label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.name} ({currency.code})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <div className="mt-6 text-center">
              <div className="text-lg text-gray-600">
                {amount} {fromCurrency} =
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {convertedAmount.toFixed(2)} {toCurrency}
              </div>
              <div className="text-sm text-gray-500 mt-2">
                1 {fromCurrency} = {exchangeRate?.toFixed(4)} {toCurrency}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;