const teams = [
  {
    id: 2,
    name: "Legal Riders",
    logo: "https://i.ibb.co/JWgm8wkj/Picsart-26-01-14-22-53-08-383.png",
  },
  {
    id: 3,
    name: "Litigation Lions",
    logo: "https://i.ibb.co/ZRhyZSPD/Picsart-26-01-14-22-47-44-565.png",
  },
  {
    id: 4,
    name: "Amicus Curiae",
    logo: "https://i.ibb.co/KcdqDgJx/Picsart-26-01-14-23-02-34-897.png",
  },
  {
    id: 5,
    name: "Jurisprudence Royals",
    logo: "https://i.ibb.co/LBDFd1n/Picsart-26-01-14-22-59-44-979.png",
  },
  {
    id: 6,
    name: "Judicature Gladiators",
    logo: "https://i.ibb.co/xqQWf9KD/Picsart-25-01-12-22-20-43-048.png",
  },
];

export default function TeamsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Participating Teams
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto px-6 ">
        {teams.map((team) => (
          <div
            key={team.id}
            className="bg-white p-6 rounded shadow text-center"
          >
            <div className="h-20 w-20 mx-auto mb-4 bg-gray-300 rounded-full p-3">
              <img src={team.logo} alt="" className="" />
            </div>
            <h3 className="font-semibold text-lg">{team.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
