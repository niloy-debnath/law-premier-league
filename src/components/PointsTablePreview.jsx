const pointsTable = [
  { team: "Black Eagles", played: 3, won: 3, points: 6 },
  { team: "Blue Warriors", played: 3, won: 2, points: 4 },
  { team: "Golden Lions", played: 3, won: 1, points: 2 },
  { team: "Red Titans", played: 3, won: 0, points: 0 },
];

export default function PointsTablePreview() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Points Table</h2>

      <div className="max-w-4xl mx-auto px-6 overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Team</th>
              <th className="p-3 border">Played</th>
              <th className="p-3 border">Won</th>
              <th className="p-3 border">Points</th>
            </tr>
          </thead>
          <tbody>
            {pointsTable.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="p-3 border font-semibold">{row.team}</td>
                <td className="p-3 border">{row.played}</td>
                <td className="p-3 border">{row.won}</td>
                <td className="p-3 border font-bold">{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
