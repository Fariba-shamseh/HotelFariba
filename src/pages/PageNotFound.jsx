import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">صفحه یافت نشد</h2>
            <p className="text-gray-600 mb-6">متأسفیم، صفحه‌ای که به دنبال آن هستید وجود ندارد.</p>
            <Link
                to="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
                بازگشت به صفحه اصلی
            </Link>
        </div>
    );
}

export default NotFound;