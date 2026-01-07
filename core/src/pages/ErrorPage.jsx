import { NavLink, useRouteError, isRouteErrorResponse } from "react-router-dom";

export const ErrorPage = () => {
  let error;
  
  try {
    error = useRouteError();
    console.error("Router error:", error);
  } catch (err) {
    console.error("Error in ErrorPage:", err);
    error = { status: 500, statusText: "An unknown error occurred" };
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Oops! Something went wrong.
        </h1>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 rounded-lg text-left">
            <p className="font-medium text-red-800">
              {isRouteErrorResponse(error) 
                ? `${error.status} - ${error.statusText || 'Error'}`
                : error.message || 'An unexpected error occurred'}
            </p>
            {process.env.NODE_ENV === 'development' && (
              <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                {JSON.stringify(error, null, 2)}
              </pre>
            )}
          </div>
        )}

        <NavLink 
          to="/" 
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Go to Homepage
        </NavLink>
      </div>
    </div>
  );
};