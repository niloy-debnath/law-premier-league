export default function HeroSection() {
  return (
    <section
      className="relative py-20 text-center text-white bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.ibb.co/Pv05GV12/1768367900265.jpg')",
        backgroundPosition: "center bottom",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4">Law Premier League 2026</h1>
        <p className="text-lg mb-6">
          The Ultimate Cricket Battle of Law Department
        </p>
        <button className="bg-yellow-500 px-6 py-2 rounded text-black font-semibold">
          View Matches
        </button>
      </div>
    </section>
  );
}
