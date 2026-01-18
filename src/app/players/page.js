import PlayerCard from "@/components/PlayerCard";

const players = [
  {
    id: 1,
    name: "Rahim Uddin",
    team: "Black Eagles",
    role: "All-Rounder",
    price: 120000,
  },
  {
    id: 2,
    name: "Sakib Hasan",
    team: "Golden Lions",
    role: "Batsman",
    price: 100000,
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    team: "Blue Warriors",
    role: "Bowler",
    price: 95000,
  },
  {
    id: 4,
    name: "Mahmudul Islam",
    team: "Red Titans",
    role: "All-Rounder",
    price: 110000,
  },
];

export default function PlayersPage() {
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        LPL Players
      </h1>

      {/* Responsive Grid */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        max-w-6xl
        mx-auto
      "
      >
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </main>
  );
}
