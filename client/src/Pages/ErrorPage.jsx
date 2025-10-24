import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  console.error(error); // for debugging

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-4">😢 Oops!</h1>
        <p className="text-gray-700 mb-6">
          Something went wrong.
        </p>
        <p className="text-gray-500 italic">
          {error?.statusText || error?.message || "Unknown error occurred."}
        </p>
        <button
          onClick={() => window.history.back()}
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
