const matches = [
  {
    id: 1,
    teamA: "Black Eagles",
    teamB: "Golden Lions",
    scoreA: "156/7",
    scoreB: "152/9",
    result: "Black Eagles won by 4 runs",
  },
  {
    id: 2,
    teamA: "Blue Warriors",
    teamB: "Red Titans",
    scoreA: "168/5",
    scoreB: "150/8",
    result: "Blue Warriors won by 18 runs",
  },
];

export default function MatchHighlights() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Match Highlights</h2>

      <div className="max-w-4xl mx-auto space-y-6 px-6">
        {matches.map((match) => (
          <div key={match.id} className="bg-white p-6 rounded shadow">
            <div className="flex justify-between font-semibold">
              <span>{match.teamA}</span>
              <span>{match.scoreA}</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>{match.teamB}</span>
              <span>{match.scoreB}</span>
            </div>

            <p className="mt-3 text-sm text-green-600">{match.result}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
