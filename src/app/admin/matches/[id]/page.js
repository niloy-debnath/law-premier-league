"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function UpdateMatch() {
  const { id } = useParams();

  const [score, setScore] = useState({
    scoreA: "",
    scoreB: "",
    result: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Update Match", id, score);
    alert("Score updated (demo)");
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Update Match</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Team A Score"
          className="w-full border p-3 rounded"
          onChange={(e) => setScore({ ...score, scoreA: e.target.value })}
        />

        <input
          placeholder="Team B Score"
          className="w-full border p-3 rounded"
          onChange={(e) => setScore({ ...score, scoreB: e.target.value })}
        />

        <input
          placeholder="Result"
          className="w-full border p-3 rounded"
          onChange={(e) => setScore({ ...score, result: e.target.value })}
        />

        <button className="w-full bg-green-600 text-white py-3 rounded">
          Update Score
        </button>
      </form>
    </main>
  );
}
