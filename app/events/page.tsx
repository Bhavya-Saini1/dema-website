
import Link from "next/link";

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
      <h1 className="text-5xl font-bold text-navy">
        DEMA Events
      </h1>

      <p className="mt-6 text-lg text-neutral-600">
        Welcome to our Events page!
      </p>

      <div className="mt-10 flex flex-col gap-4">
        <Link
          href="/events/dem-soiree"
          className="font-bold text-red hover:underline"
        >
          DEM Soirée 2026 →
        </Link>

        <Link
          href="/events/learn-to-network"
          className="font-bold text-red hover:underline"
        >
          Learn to Network →
        </Link>
      </div>
    </main>
  );
}
