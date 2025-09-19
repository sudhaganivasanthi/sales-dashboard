import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to the Sales Dashboard</h1>
        <p className="mt-4 text-gray-600">
          Navigate to the Dashboard page to view interactive sales analytics.
        </p>
      </main>
    </div>
  );
}
