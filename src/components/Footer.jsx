export default function Footer() {
  return (
    <footer className="bg-[#071c39] text-gray-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">
          Law Premier League
        </h3>

        <p className="text-sm mb-4">
          Organized by the Law Department | University Cricket Tournament
        </p>

        <p className="text-sm">
          © {new Date().getFullYear()} LPL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
