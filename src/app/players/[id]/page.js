const players = [
  {
    id: 1,
    name: "Rahim Uddin",
    team: "Black Eagles",
    role: "All-Rounder",
    price: 120000,
    runs: 245,
    wickets: 8,
  },
  {
    id: 2,
    name: "Sakib Hasan",
    team: "Golden Lions",
    role: "Batsman",
    price: 100000,
    runs: 310,
    wickets: 2,
  },
];

export default async function PlayerDetails({ params }) {
  // ✅ UNWRAP params (Next.js 15 requirement)
  const { id } = await params;

  const player = players.find((p) => p.id === Number(id));

  if (!player) {
    return <p className="text-center mt-20">Player not found</p>;
  }

  return (
    <main className="py-16 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">{player.name}</h1>

      <p className="text-gray-600 mb-2">Team: {player.team}</p>

      <p className="text-gray-600 mb-2">Role: {player.role}</p>

      <p className="font-bold text-green-600 mb-6">
        Price: ৳ {player.price.toLocaleString()}
      </p>

      <div className="border-t pt-6">
        <p>Total Runs: {player.runs}</p>
        <p>Total Wickets: {player.wickets}</p>
      </div>
    </main>
  );
}
