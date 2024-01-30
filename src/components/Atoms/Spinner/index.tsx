import { FC } from "react";

type Colors =
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "emerald"
  | "teal";

interface SpinnerProps {
  color: Colors;
}

export const Spinner: FC<SpinnerProps> = ({ color }) => {
  const colors: Record<string, string> = {
    red: "text-red-500",
    yellow: "text-yellow-500",
    green: "text-green-500",
    blue: "text-blue-500",
    indigo: "text-indigo-500",
    purple: "text-purple-500",
    pink: "text-pink-500",
    emerald: "text-emerald-700",
    teal: "text-teal-500",
  };

  return (
    <div className="flex justify-center items-center">
      <svg
        className={`animate-spin h-6 w-6 ${colors[color]}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
    </div>
  );
};
