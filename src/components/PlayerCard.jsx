import Link from "next/link";

const PlayerCard = ({ player }) => {
  return (
    <div className="relative  bg-[#D0E6FD] rounded-2xl shadow-xl overflow-hidden ">
      {/* Player Image */}
      {/* <img
        src="https://i.ibb.co/C3k9xgjv/player.png"
        alt={player.name}
        className="absolute -right-15 bottom-0  object-contain"
      /> */}

      {/* Content */}
      <div className="relative z-10 p-6 mb-10">
        <h2 className="text-2xl font-bold text-[#162660] uppercase">
          {player.name}
        </h2>

        <p className="text-sm text-[#162660]/70 tracking-wide">{player.role}</p>

        <div className="my-3 h-[2px] w-16 bg-[#162660]/30"></div>

        <div className="space-y-2 text-sm text-[#162660]">
          <p>
            <span className="font-semibold">Team:</span> {player.team}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ৳{player.price}
          </p>
          <p>
            <span className="font-semibold">Matches:</span> {player.matches}
          </p>
          <p>
            <span className="font-semibold ">
              {player.role === "Batsman" ? "Runs" : "Wickets"}:
            </span>{" "}
            {player.stats}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full bg-[#162660] text-[#F1E4D1] text-center py-2 text-xs tracking-widest ">
        LAW PREMIER LEAGUE
      </div>
    </div>
  );
};

export default PlayerCard;
