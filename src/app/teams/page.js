import Link from "next/link";

export default function TeamsPage() {
  const teams = [
    {
      id: "amicus-curiae",
      name: "Amicus Curiae",
      captain: "Talha",
      matches: 0,
      wins: 0,
      image: "https://i.ibb.co/KcdqDgJx/Picsart-26-01-14-23-02-34-897.png",
    },
    {
      id: "legal-riders",
      name: "Legal Riders",
      captain: "Anik",
      matches: 0,
      wins: 0,
      image: "https://i.ibb.co/JWgm8wkj/Picsart-26-01-14-22-53-08-383.png",
    },
    {
      id: "jurisprudence-royals",
      name: "Jurisprudence Royals",
      captain: "Arif Mahmud",
      matches: 0,
      wins: 0,
      image: "https://i.ibb.co/LBDFd1n/Picsart-26-01-14-22-59-44-979.png",
    },
    {
      id: "judicature-gladiators",
      name: "Judicature Gladiators",
      captain: "Tanvir Ahmed",
      matches: 0,
      wins: 0,
      image: "https://i.ibb.co/xqQWf9KD/Picsart-25-01-12-22-20-43-048.png",
    },
    {
      id: "litigation-lions",
      name: "Litigation Lions",
      captain: "Tanvir Ahmed",
      matches: 0,
      wins: 0,
      image: "https://i.ibb.co/ZRhyZSPD/Picsart-26-01-14-22-47-44-565.png",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">LPL Teams</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Link
            key={team.id}
            href={`/teams/${team.id}`}
            className="border-2 border-[#071c39] rounded-lg p-6 bg-white shadow hover:shadow-lg transition "
          >
            <div className="flex-col items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{team.name}</h2>

                <p className="text-gray-600 mb-1">Captain: {team.captain}</p>

                <p className="text-sm text-gray-500">
                  Matches: {team.matches} • Wins: {team.wins}
                </p>
              </div>
              <div className="">
                <img className="h-50" src={team.image}></img>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
