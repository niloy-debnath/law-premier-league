"use client";

import { useState } from "react";

export default function AddMatch() {
  const [form, setForm] = useState({
    teamA: "",
    teamB: "",
    date: "",
    venue: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Match:", form);
    alert("Match added (demo)");
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Add Match</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="teamA"
          placeholder="Team A"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <input
          name="teamB"
          placeholder="Team B"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <input
          name="date"
          placeholder="Match Date"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <input
          name="venue"
          placeholder="Venue"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <button className="w-full bg-black text-white py-3 rounded">
          Add Match
        </button>
      </form>
    </main>
  );
}
