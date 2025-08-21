"use client";

export default function SignOutButton({
  handleLogout,
}: {
  handleLogout: () => void;
}) {
  return (
    <button
      className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
