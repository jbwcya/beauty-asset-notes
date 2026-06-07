export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-8 text-4xl font-bold">
          💎 美麗資產筆記
        </h1>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <p className="text-zinc-400">淨資產</p>

          <h2 className="mt-2 text-6xl font-bold">
            $1,940,000
          </h2>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-white"
              style={{ width: "12.9%" }}
            />
          </div>

          <p className="mt-3 text-sm text-zinc-400">
            FIRE 進度 12.9%
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-zinc-400">總資產</p>
            <p className="mt-2 text-3xl font-semibold">
              $18,540,000
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-zinc-400">總負債</p>
            <p className="mt-2 text-3xl font-semibold">
              $16,600,000
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-zinc-400">FIRE目標</p>
            <p className="mt-2 text-3xl font-semibold">
              $15,000,000
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}