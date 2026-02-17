import { useEffect } from "react";

function Meet() {
  const redirectUrl = "https://meet.google.com/fah-jykb-hzo";

  useEffect(() => {
    window.location.href = redirectUrl;
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111111]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Google Meet...</p>
        <p className="text-sm text-gray-500 mt-2">
          If you're not redirected automatically,
          <a href={redirectUrl} className="text-blue-500 underline ml-1">
            click here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Meet;
