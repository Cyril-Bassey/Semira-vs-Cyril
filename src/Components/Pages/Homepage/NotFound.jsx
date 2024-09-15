import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
            <div className="bg-white rounded-lg shadow-lg p-10 text-center">
                <h1 className="text-6xl font-bold text-orange-600 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
                <p className="text-gray-600 mb-6">
                    Oops! The page you are looking for does not exist or has been moved.
                </p>

                <div className="mb-8">
                    <img
                        className="w-full h-64 object-cover rounded-lg mx-auto"
                        src="https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g"
                        alt="404"
                    />
                </div>

                <Link to="/" className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
