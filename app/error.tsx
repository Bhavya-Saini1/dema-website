"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-7xl flex-col items-start justify-center px-6 py-24 md:px-12 lg:px-16">
      <p className="font-mono text-xs font-bold uppercase tracking-widest text-red">
        Error
      </p>
      <h1 className="mt-4 font-sans text-4xl font-bold tracking-tight text-navy">
        Something went wrong
      </h1>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 inline-block rounded-none border border-red bg-red px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red-dark hover:bg-red-dark"
      >
        Try again
      </button>
    </main>
  );
}
