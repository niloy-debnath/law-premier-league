"use client";

import Link from "next/link";

export default function MatchCard({ match }) {
  return (
    <Link href={`/matches/${match.id}`}>
      <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition cursor-pointer">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>{match.date}</span>
          <span
            className={`font-semibold ${
              match.status === "Completed" ? "text-green-600" : "text-blue-600"
            }`}
          >
            {match.status}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="font-semibold">{match.teamA}</span>
            <span>{match.scoreA}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">{match.teamB}</span>
            <span>{match.scoreB}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-3">{match.result}</p>
      </div>
    </Link>
  );
}
