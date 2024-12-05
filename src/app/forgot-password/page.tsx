export default function ForgotPassword() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
            Forgot Password
          </h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email to recover password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
            >
              Send Recovery Email
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="/login" className="text-blue-500 hover:underline">
              Back to Login
            </a>
          </div>
        </div>
      </div>
    );
  }
  