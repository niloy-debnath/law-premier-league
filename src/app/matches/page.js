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
  },
];

import MatchCard from "./MatchCard";

export default function MatchesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Match Results</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
        <p>Total matches: {matches.length}</p>
      </div>
    </main>
  );
}
