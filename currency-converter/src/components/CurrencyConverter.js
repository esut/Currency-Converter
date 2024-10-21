import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
const CurrencyConverter = () => {
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const currencies = [
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
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}?apikey=4f538175a5f76af2847c089d`);
                const data = await response.json();
                setExchangeRate(data.rates[toCurrency]);
            }
            catch (err) {
                setError('There was an error fetching exchange rates.');
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchExchangeRate();
    }, [fromCurrency, toCurrency]);
    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };
    const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value);
        setAmount(isNaN(value) ? 0 : value);
    };
    const convertedAmount = amount * (exchangeRate || 0);
    return (_jsx("div", { className: "max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4", children: _jsxs("div", { className: "p-8", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-6", children: "Currency Converter" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Amount" }), _jsx("input", { type: "number", value: amount, onChange: handleAmountChange, className: "w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500", min: "0" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "From" }), _jsx("select", { value: fromCurrency, onChange: (e) => setFromCurrency(e.target.value), className: "w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500", children: currencies.map((currency) => (_jsxs("option", { value: currency.code, children: [currency.name, " (", currency.code, ")"] }, currency.code))) })] }), _jsx("button", { onClick: handleSwapCurrencies, className: "mt-6 p-2 rounded-full hover:bg-gray-100", "aria-label": "Currency exchange", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-5 w-5", children: [_jsx("path", { d: "M7 10l5-5 5 5" }), _jsx("path", { d: "M7 14l5 5 5-5" })] }) }), _jsxs("div", { className: "flex-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "To" }), _jsx("select", { value: toCurrency, onChange: (e) => setToCurrency(e.target.value), className: "w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500", children: currencies.map((currency) => (_jsxs("option", { value: currency.code, children: [currency.name, " (", currency.code, ")"] }, currency.code))) })] })] }), isLoading ? (_jsx("div", { className: "text-center text-gray-500", children: "Loading..." })) : error ? (_jsx("div", { className: "text-center text-red-500", children: error })) : (_jsxs("div", { className: "mt-6 text-center", children: [_jsxs("div", { className: "text-lg text-gray-600", children: [amount, " ", fromCurrency, " ="] }), _jsxs("div", { className: "text-3xl font-bold text-gray-900", children: [convertedAmount.toFixed(2), " ", toCurrency] }), _jsxs("div", { className: "text-sm text-gray-500 mt-2", children: ["1 ", fromCurrency, " = ", exchangeRate?.toFixed(4), " ", toCurrency] })] }))] })] }) }));
};
export default CurrencyConverter;
