import Image from "next/image";

/* Player Pool */
const playerPool = [
  { name: "Rahim Uddin", role: "All-Rounder", price: 120000 },
  { name: "Sakib Hasan", role: "Batsman", price: 100000 },
  { name: "Tanvir Ahmed", role: "Bowler", price: 95000 },
  { name: "Mahmudul Islam", role: "All-Rounder", price: 110000 },
  { name: "Imran Hossain", role: "Batsman", price: 90000 },
  { name: "Fahim Rahman", role: "Bowler", price: 85000 },
  { name: "Arif Chowdhury", role: "Wicket Keeper", price: 98000 },
  { name: "Nasir Uddin", role: "Bowler", price: 88000 },
  { name: "Shanto Das", role: "Batsman", price: 92000 },
  { name: "Riyad Mahmud", role: "All-Rounder", price: 105000 },
  { name: "Aminul Islam", role: "Bowler", price: 87000 },
  { name: "Tariqul Hasan", role: "Batsman", price: 91000 },
  { name: "Mehedi Hasan", role: "All-Rounder", price: 99000 },
  { name: "Sabbir Ahmed", role: "Batsman", price: 93000 },
];

/* Helper */
function getRandomXI(players) {
  return [...players].sort(() => 0.5 - Math.random()).slice(0, 11);
}

/* Teams */
const teams = [
  {
    id: "amicus-curiae",
    name: "Amicus Curiae",
    captain: "Talha",
    homeGround: "University Cricket Ground",
    logo: "https://i.ibb.co/KcdqDgJx/Picsart-26-01-14-23-02-34-897.png",
  },
  {
    id: "legal-riders",
    name: "Legal Riders",
    captain: "Anik",
    homeGround: "Main Stadium",
    logo: "https://i.ibb.co/JWgm8wkj/Picsart-26-01-14-22-53-08-383.png",
  },
  {
    id: "jurisprudence-royals",
    name: "Jurisprudence Royals",
    captain: "Arif Mahmud",
    homeGround: "Law Field",
    logo: "https://i.ibb.co/LBDFd1n/Picsart-26-01-14-22-59-44-979.png",
  },
  {
    id: "judicature-gladiators",
    name: "Judicature Gladiators",
    captain: "Tanvir Ahmed",
    homeGround: "Central Ground",
    logo: "https://i.ibb.co/xqQWf9KD/Picsart-25-01-12-22-20-43-048.png",
  },
  {
    id: "litigation-lions",
    name: "Litigation Lions",
    captain: "Tanvir Ahmed",
    homeGround: "City Stadium",
    logo: "https://i.ibb.co/ZRhyZSPD/Picsart-26-01-14-22-47-44-565.png",
  },
];

export default async function TeamDetailsPage({ params }) {
  // ✅ REQUIRED in Next.js 16
  const { id } = await params;

  const team = teams.find((t) => t.id === id);
  const playingXI = getRandomXI(playerPool);

  if (!team) {
    return (
      <p className="text-center py-20 text-xl font-semibold">Team not found</p>
    );
  }

  return (
    <main className="min-h-screen bg-[#F1E4D1]">
      {/* Header */}
      <section className="py-16 bg-[#162660] text-white text-center">
        <div className="flex flex-col items-center gap-4">
          <img
            src={team.logo}
            alt={team.name}
            width={120}
            height={120}
            className="rounded-full bg-white p-2"
          />
          <h1 className="text-4xl font-bold">{team.name}</h1>
          <p className="text-[#D0E6FD]">
            Captain: {team.captain} • {team.homeGround}
          </p>
        </div>
      </section>

      {/* Playing XI */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Playing XI</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {playingXI.map((player, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-center"
            >
              <h3 className="text-lg font-semibold text-[#162660]">
                {player.name}
              </h3>
              <p className="text-gray-600">{player.role}</p>
              <p className="mt-2 font-bold text-[#162660]">
                ৳ {player.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
