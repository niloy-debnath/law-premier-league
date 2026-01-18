import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">Admin Panel</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/admin/matches"
          className="border p-6 rounded-lg text-center hover:shadow"
        >
          ➕ Add New Match
        </Link>

        <Link
          href="admin/matches/${id}"
          className="border p-6 rounded-lg text-center hover:shadow"
        >
          🏏 Update Match Scores
        </Link>
      </div>
    </main>
  );
}
