import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CurrencyConverter from '@/components/CurrencyConverter.tsx'; // إذا كنت تستخدم alias
import Footer from './components/Footer.tsx';
function App() {
    return (_jsxs("div", { className: "min-h-screen bg-gray-100", children: [_jsx("header", { className: "bg-white shadow", children: _jsx("nav", { className: "container mx-auto px-4 py-4", children: _jsxs("ul", { className: "flex justify-center space-x-4", children: [_jsx("li", { children: _jsx("a", { href: "#", className: "text-blue-600 hover:text-blue-800", children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "text-blue-600 hover:text-blue-800", children: "Support" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "text-blue-600 hover:text-blue-800", children: "Help" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "text-blue-600 hover:text-blue-800", children: "More" }) })] }) }) }), _jsxs("main", { className: "container mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-3xl font-bold text-center mb-8", children: "Currency Converter" }), _jsx(CurrencyConverter, {})] }), _jsx(Footer, {})] }));
}
export default App;
