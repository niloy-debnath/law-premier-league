export default function TopPlayersSection() {
  const players = [
    { id: 1, name: "Rahim Uddin", team: "Black Eagles", price: 120000 },
    { id: 2, name: "Sakib Hasan", team: "Golden Lions", price: 100000 },
    { id: 3, name: "Tanvir Ahmed", team: "Blue Warriors", price: 95000 },
  ];
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Top Players</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {players.map((player) => (
          <div
            key={player.id}
            className="bg-background text-foreground rounded p-6 text-center shadow"
          >
            <div className="h-24 w-24 mx-auto bg-gray-300 rounded-full mb-4">
              <img src="https://i.ibb.co/60VW2xmT/user.png" alt="" />
            </div>

            <h3 className="font-semibold text-lg">{player.name}</h3>
            <p className="text-sm opacity-70">{player.team}</p>

            <p className="mt-2 font-bold text-green-600">
              ৳ {player.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
