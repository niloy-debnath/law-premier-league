const matches = [
  {
    id: "1",
    teamA: "Black Eagles",
    teamB: "Golden Lions",
    scoreA: "145/6 (20)",
    scoreB: "142/9 (20)",
    status: "Completed",
    result: "Black Eagles won by 3 runs",
    date: "10 Feb 2026",
    venue: "University Cricket Ground",
  },
  {
    id: "2",
    teamA: "Legal Warriors",
    teamB: "Justice Kings",
    scoreA: "—",
    scoreB: "—",
    status: "Upcoming",
    result: "Match starts at 2:00 PM",
    date: "12 Feb 2026",
    venue: "Main Stadium",
  },
];
export default async function MatchDetails({ params }) {
  const { id } = await params;

  const match = matches.find((m) => m.id === id);

  if (!match) {
    return <p className="text-center mt-20">Match not found</p>;
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {match.teamA} vs {match.teamB}
      </h1>

      <p className="text-center text-gray-500 mb-6">
        {match.date} • {match.venue}
      </p>

      <div className="border rounded-lg p-6 bg-white shadow">
        <div className="flex justify-between mb-4">
          <span className="font-semibold text-lg">{match.teamA}</span>
          <span className="text-lg">{match.scoreA}</span>
        </div>

        <div className="flex justify-between mb-6">
          <span className="font-semibold text-lg">{match.teamB}</span>
          <span className="text-lg">{match.scoreB}</span>
        </div>

        <p
          className={`text-center font-semibold ${
            match.status === "Completed" ? "text-green-600" : "text-blue-600"
          }`}
        >
          {match.result}
        </p>
      </div>
    </main>
  );
}
